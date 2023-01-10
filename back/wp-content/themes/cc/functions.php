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