<?php 

namespace App\Controllers;

use src\View\View;

class BienesController{
    
    public function __construct(){
    }

    public function index(){
        $classHeader = 'inicio';
        $title = 'Venta de Casas y Departamentos Exclusivos de Lujo';

        View::render('index', compact('classHeader', 'title'));
    }

    public function adverts(){
        View::render('adverts');
    }

    public function advert(){
        View::render('advert');
    }

    public function blog(){
        View::render('blog');
    }

    public function post(){
        View::render('post');
    }

    public function contact(){
        View::render('contact');
    }

    public function aboutUs(){
        View::render('about-us');
    }
}