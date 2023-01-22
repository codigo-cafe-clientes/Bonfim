<?php


	/*******************
	 * Create Post Type
	 *******************/

	add_action( 'init', 'create_service_post_type' );
	function create_service_post_type () {
		$labels = Array(
			'name' => 'Serviços',
			'singular_name' => 'Serviço'
		);
		$supports = Array(
			'title',
			'editor',
			'excerpt',
			'thumbnail'
		);
		$args = Array(
			'labels' => $labels,
			'public' => true,
			'hierarchical' => false,
			'rest_namespace' => 'cb/v1',
			'rest_base' => 'services',
			'show_in_rest' => true,
			'menu_icon' => 'dashicons-hammer',
			'capability_type' => 'post',
			'supports' => $supports,
			'has_archive' => false
		);
		register_post_type( 'bc_service', $args );
	}

	add_action( 'init', 'create_client_post_type' );
	function create_client_post_type () {
		$labels = Array(
			'name' => 'Clientes',
			'singular_name' => 'Cliente'
		);
		$supports = Array(
			'title',
			'thumbnail'
		);
		$args = Array(
			'labels' => $labels,
			'public' => true,
			'hierarchical' => false,
			'rest_namespace' => 'cb/v1',
			'rest_base' => 'clients',
			'show_in_rest' => true,
			'menu_icon' => 'dashicons-groups',
			'capability_type' => 'post',
			'supports' => $supports,
			'has_archive' => fase
		);
		register_post_type( 'bc_client', $args );
	}	


	/*********************************
	 * Create endpoints for REST API 
	 *********************************/

	add_action( 'rest_api_init', 'create_endpoint_clients' );
	function create_endpoint_clients () {
		register_rest_route('bc/v1', '/clients', [
			'method' => 'GET',
			'callback' => function( $data ) {
				$datas = [];
				$args = Array(
					'post_type' => 'bc_client',
					'posts_per_page' => -1
				);
				$clients = new WP_Query( $args );
				if ( $clients->have_posts() ) {
					while ( $clients->have_posts() ) {
						$clients->the_post();
						$client['id'] = get_the_ID();
						$client['name'] = get_the_title();
						$client['image'] = change_media_uri( get_the_post_thumbnail_url( get_the_ID(), 'full' ) );
						$datas[] = $client;
					}
				}
				return $datas;
			}
		]);
	}

	add_action( 'rest_api_init', 'create_endpoint_services' );
	function create_endpoint_services () {
		register_rest_route('bc/v1', '/services', [
			'method' => 'GET',
			'callback' => function( $data ) {
				$datas = [];
				$args = Array(
					'post_type' => 'bc_service',
					'posts_per_page' => -1
				);
				$services = new WP_Query( $args );
				if ( $services->have_posts() ) {
					while ( $services->have_posts() ) {
						$services->the_post();
						$service['id'] = get_the_ID();
						$service['name'] = get_the_title();
						$service['excerpt'] = get_the_excerpt();
						$service['content'] = get_the_content();
						$service['image'] = change_media_uri( get_the_post_thumbnail_url( get_the_ID(), 'thumbnail' ) );
						$service['background'] = change_media_uri( get_the_post_thumbnail_url( get_the_ID(), 'full' ) );
						$datas[] = $service;
					}
				}
				return $datas;
			}
		]);
	}

	add_action( 'rest_api_init', 'create_endpoint_page_home' );
	function create_endpoint_page_home () {
		register_rest_route( 'bc/v1', '/page/home', [
			'method' => 'GET',
			'callback' => function( $data ){
				$pages = Array();
				$args = Array(
					'post_type' => 'page',
					'page_id' => 13
				);
				$page = new WP_Query( $args );
				if ( $page->have_posts() ) {
					while ( $page->have_posts() ) {
						$page->the_post();
						$pages['about']['title'] = get_field('home_about_title');
						$pages['about']['text'] = get_field('home_about_text');
						$pages['about']['image'] = change_media_uri( get_field('home_about_image') );

						$pages['video']['image'] = change_media_uri( get_field('home_video_image') );
						$pages['video']['embed'] = get_field('home_video_embed');

						$pages['consult']['title'] = get_field('home_consult_title');
						$pages['consult']['text'] = get_field('home_consult_text');
						$pages['consults'] = get_field('home_consult');
					}
				}
				return $pages;
			}
		]);
	}


	/****************
	 * Support theme
	 ****************/

	add_action( 'after_setup_theme', 'add_thumbnail_support' );
	function add_thumbnail_support() {
		add_theme_support( 'post-thumbnails' );
	}


	/************
	 * Functions
	 ************/

	function change_media_uri ( $url ) {
		return str_replace( 'https://panel.contabilidadebonfim.com.br/cdn', 'https://cdn.contabilidadebonfim.com.br', $url );
	}