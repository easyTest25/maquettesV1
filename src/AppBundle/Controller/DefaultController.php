<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    /**
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function homeAction()
    {
        return $this->render('AppBundle:default:index.html.twig');
    }

    /**
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function loginAction()
    {
        return $this->render('AppBundle:default:login.html.twig');
    }

    /**
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function subscribeAction()
    {
        return $this->render('AppBundle:default:subscribe.html.twig');
    }

    public function myAdvertsAction()
    {
        return $this->render('AppBundle:default:my-adverts.html.twig');
    }
}
