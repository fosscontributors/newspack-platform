<?php

namespace Google\AdsApi\AdManager\v202311;


/**
 * This file was generated from WSDL. DO NOT EDIT.
 */
class getActivitiesByStatementResponse
{

    /**
     * @var \Google\AdsApi\AdManager\v202311\ActivityPage $rval
     */
    protected $rval = null;

    /**
     * @param \Google\AdsApi\AdManager\v202311\ActivityPage $rval
     */
    public function __construct($rval = null)
    {
      $this->rval = $rval;
    }

    /**
     * @return \Google\AdsApi\AdManager\v202311\ActivityPage
     */
    public function getRval()
    {
      return $this->rval;
    }

    /**
     * @param \Google\AdsApi\AdManager\v202311\ActivityPage $rval
     * @return \Google\AdsApi\AdManager\v202311\getActivitiesByStatementResponse
     */
    public function setRval($rval)
    {
      $this->rval = $rval;
      return $this;
    }

}