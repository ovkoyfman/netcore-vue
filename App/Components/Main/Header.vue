<template>
  <header class="header-sso">
    <div class="container">
      <div class="btn-group btn-group--product-ddm">
        <a href="" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"><img src="https://uikits.cendyn.com/Areas/v002/Content/Images/product-ddm-blocks.jpg" alt="Product Nav Dropdown"></a>
        <ul class="dropdown-menu">
          <li class="product-ddm--item text-center">
            <a href="/Dashboard">
              <span class="icon-home2"></span>
              <span class="ddm-item--text">DashBoard</span>
            </a>
          </li>
          <router-link tag="li" to="/createedit" class="product-ddm--item text-center sso-product--code-eInsight"><a><span class="icon-sso-product"></span><span class="ddm-item--text">Create/Edit<sup>®</sup></span></a></router-link>
          <router-link tag="li" to="/cmseditor/welcome/"  class="product-ddm--item text-center sso-product--code-eConcierge"><a><span class="icon-sso-product"></span><span class="ddm-item--text">CMS Editor<sup>®</sup></span></a></router-link>
          <li class="product-ddm--item text-center sso-product--code-eUpgrade">
            <a href="#"><span class="icon-sso-product"></span><span class="ddm-item--text">eUpgrade<sup>®</sup></span></a>
          </li>
          <li class="product-ddm--item text-center sso-product--code-eLoyalty">
            <a href="#"><span class="icon-sso-product"></span><span class="ddm-item--text">eLoyalty<sup>®</sup></span></a>
          </li>
          <li class="product-ddm--item text-center sso-product--code-eProposal">
            <a href="#"><span class="icon-sso-product"></span><span class="ddm-item--text">eProposal<sup>®</sup></span></a>
          </li>
          <li class="product-ddm--item text-center sso-product--code-eMenus">
            <a href="#"><span class="icon-sso-product"></span><span class="ddm-item--text">eMenus<sup>®</sup></span></a>
          </li>
          <li class="product-ddm--item text-center sso-product--code-ePlanner">
            <a href="#"><span class="icon-sso-product"></span><span class="ddm-item--text">ePlanner<sup>®</sup></span></a>
          </li>
          <li class="product-ddm--item text-center sso-product--code-eBrochure">
            <a href="#"><span class="icon-sso-product"></span><span class="ddm-item--text">eBrochure<sup>®</sup></span></a>
          </li>
          <li class="product-ddm--item text-center sso-product--code-ScoreCard">
            <a href="#"><span class="icon-sso-product"></span><span class="ddm-item--text">ScoreCard<sup>®</sup></span></a>
          </li>
        </ul>
        <span class="h1 h1-sso"> Cendyn Access |</span>
        <span class="h1 h1-sso"> eLoyalty |</span>
        <span class="h1 h1-sso"> Cendyn Hotel</span>
      </div>
      <div class="utilityNavWrapper settingsWrapper dropdown">
        <span class="utilityNavGreeting">Robin Deyo!</span>
        <div class="btn-group">
          <a class="btn btn-link dropdown-toggle" id="settingsDDM" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
            <span class="user">MySettings</span>
            <span class="icon-chevron-down"></span>
          </a>
          <ul class="dropdown-menu dropdown-menu-right dropdown-menu-caret dropdown-sso-settings" aria-labelledby="settingsDDM">
            <li><a href="#" data-toggle="modal"><span class="icon-earth"></span> <span class="sso-settings--item">Language Settings</span></a></li>
            <li><a href="#"><span class="icon-lock"></span> <span class="sso-settings--item">LogOut</span></a></li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>