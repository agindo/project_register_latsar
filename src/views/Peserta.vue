<template>
    <div id="wrapper">
        <div id="sidebar-wrapper">
            <div class="flex flex-col h-screen">
                <div class="text-gray-700 text-center px-2 py-2 mx-2 mt-5">
                    <img class="img-fluid img-profile rounded-circle mx-auto" src="@/assets/user_p.png" width="100" height="100">
                </div>
                <div class="text-gray-700 text-center px-2 py-2 mx-2 mt-2">
                    <ul class="sidebar-nav">
                        <li><router-link to="/peserta">Profile</router-link></li>
                        <li><router-link to="/peserta/biodata">Biodata</router-link></li>
                        <li><router-link to="/peserta/dokumen">Dokumen</router-link></li>
                        <li><router-link to="/peserta/nametag">Nametag</router-link></li>
                        <li><a href="#">Logout</a></li>
                    </ul>
                </div>
                <!-- <div class"text-gray-700 text-center bg-gray-400 px-2 py-2 mx-2 mt-2">3</div> -->
            </div>
            <!--<ul class="sidebar-nav">
                <li class="sidebar-brand">
                    <a href="#">
                        <img src="@/assets/profile.jpg" alt="" class="img-fluid img-profile rounded-circle mx-auto mb-2" width="72" height="72">
                    </a>
                </li>
                <li>
                    <a href="#">Profile</a>
                </li>
                <li>
                    <a href="#">Biodata</a>
                </li>
                <li>
                    <a href="#">Dokumen</a>
                </li>
                <li>
                    <a href="#">Logout</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Services</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
            </ul>-->
        </div>
        <!-- /#sidebar-wrapper -->

        <!-- Page Content -->
        <div id="page-content-wrapper">
            <router-view></router-view>
        </div>
    </div>
</template>
<style scoped>
/*!
 * Start Bootstrap - Simple Sidebar HTML Template (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

/* Toggle Styles */

#wrapper {
    padding-left: 0;
    -webkit-transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    -o-transition: all 0.5s ease;
    transition: all 0.5s ease;
}

#wrapper.toggled {
    padding-left: 250px;
}

#sidebar-wrapper {
    z-index: 1000;
    position: fixed;
    left: 250px;
    width: 0;
    height: 100%;
    margin-left: -250px;
    overflow-y: auto;
    background: #000;
    -webkit-transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    -o-transition: all 0.5s ease;
    transition: all 0.5s ease;
}

#wrapper.toggled #sidebar-wrapper {
    width: 250px;
}

#page-content-wrapper {
    width: 100%;
    position: absolute;
    padding: 15px;
}

#wrapper.toggled #page-content-wrapper {
    position: absolute;
    margin-right: -250px;
}

/* Sidebar Styles */

.sidebar-nav {
    /* position: absolute; */
    top: 0;
    /* width: 250px; */
    margin: 0;
    padding: 0;
    list-style: none;
}

.sidebar-nav li {
    /* text-indent: 20px; */
    line-height: 40px;
}

.sidebar-nav li a {
    display: block;
    text-decoration: none;
    color: #999999;
}

.sidebar-nav li a:hover {
    text-decoration: none;
    color: #fff;
    background: rgba(255,255,255,0.2);
}

.sidebar-nav li a:active,
.sidebar-nav li a:focus {
    text-decoration: none;
}

.sidebar-nav > .sidebar-brand {
    height: 65px;
    font-size: 18px;
    line-height: 60px;
}

.sidebar-nav > .sidebar-brand a {
    color: #999999;
}

.sidebar-nav > .sidebar-brand a:hover {
    color: #fff;
    background: none;
}

@media(min-width:768px) {
    #wrapper {
        padding-left: 250px;
    }

    #wrapper.toggled {
        padding-left: 0;
    }

    #sidebar-wrapper {
        width: 250px;
    }

    #wrapper.toggled #sidebar-wrapper {
        width: 0;
    }

    #page-content-wrapper {
        padding: 20px;
        position: relative;
    }

    #wrapper.toggled #page-content-wrapper {
        position: relative;
        margin-right: 0;
    }
}

.img-profile{
    max-width: 10rem;
    max-height: 10rem;
    border: 0.5rem solid rgba(255, 255, 255, 0.2);
}
</style>