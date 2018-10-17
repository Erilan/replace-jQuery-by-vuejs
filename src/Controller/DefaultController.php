<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{

    public function index()
    {
        return $this->render('index.html.twig');
    }

    public function panels()
    {
        return $this->render('panels.html.twig');
    }

    public function dropdown()
    {
        return $this->render('dropdown.html.twig');
    }

    public function recipe()
    {
        return $this->render('recipe.html.twig');
    }

    public function recipeComponents()
    {
        return $this->render('recipeComponents.html.twig');
    }

    public function recipeComponentsWebpack()
    {
        return $this->render('recipeComponentsWebpack.html.twig');
    }

    public function widgets()
    {
        return $this->render('widgets.html.twig');
    }

}