<?php

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

	add_action( 'after_setup_theme', 'add_thumbnail_support' );
	function add_thumbnail_support() {
		add_theme_support( 'post-thumbnails' );
	}

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

	function change_media_uri ( $url ) {
		return str_replace( 'https://panel.contabilidadebonfim.com.br/cdn', 'https://cdn.contabilidadebonfim.com.br', $url );
	}