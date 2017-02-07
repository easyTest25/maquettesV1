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

    public function dashboardAction()
    {
        return $this->render('AppBundle:default:dashboard.html.twig');
    }

    public function mailboxAction()
    {
        return $this->render('AppBundle:default:mailbox.html.twig');
    }
    public function tryListAction()
    {
        return $this->render('AppBundle:default:try-list.html.twig');
    }

    public function advertCalendarAction()
    {
        return $this->render('AppBundle:default:advert-calendar.html.twig');
    }

    public function myAccountAction()
    {
        return $this->render('AppBundle:default:my-account.html.twig');
    }


}
