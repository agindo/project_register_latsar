<template>
    <div id="wrapper">
        <span v-if="role != 'Admin'">
            {{ this.$router.push('/peserta') }}
        </span>
        <div id="sidebar-wrapper">
            <ul class="sidebar-nav">
                <li class="sidebar-brand">
                    <a href="#">Register Latsar</a>
                </li>
                <li><router-link to="/dashboard">Dashboard</router-link></li>
                <li><router-link to="/dashboard/penyelenggaraan">Data Penyelenggaraan</router-link></li>
                <li><router-link to="/dashboard/kelas">Data Kelas</router-link></li>
                <li><router-link to="/dashboard/peserta_latsar">Data Peserta Latsar</router-link></li>
                <li><router-link to="/dashboard/daftar_hadir">Daftar Hadir</router-link></li>
                <li><router-link to="/dashboard/nametag">Nametag</router-link></li>
            </ul>
        </div>
        <div id="page-content-wrapper">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="flex flex-row justify-between items-center bg-gray-200">
                            <div class="text-center">
                                <b-breadcrumb :items="items" class="bg-transparent m-0"></b-breadcrumb>
                            </div>
                            <div class="text-center pr-2">
                                <div>
                                    <b-dropdown id="dropdown-1" right text="username" variant="bg-transparent">
                                        <b-dropdown-item @click="logout">Logout</b-dropdown-item>
                                        <!-- <b-dropdown-item>Second Action</b-dropdown-item>
                                        <b-dropdown-item>Third Action</b-dropdown-item> -->
                                    </b-dropdown>
                                </div>
                            </div>
                        </div>
                        <router-view></router-view>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            role: this.$store.getters.role,
            items: [
                {
                    text: 'Admin',
                    href: '#'
                },
                {
                    text: 'Manage',
                    href: '#'
                },
                {
                    text: 'Library',
                    active: true
                }
            ]
        }
    },
    methods: {
        logout: function () {
            this.$store.dispatch('logout')
            .then(() => {
                this.$router.push('/login')
            })
        }
    }
}
</script>
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
    position: absolute;
    top: 0;
    width: 250px;
    margin: 0;
    padding: 0;
    list-style: none;
}

.sidebar-nav li {
    text-indent: 20px;
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
.sidebar-nav1 {
    /* position: absolute; */
    top: 0;
    /* width: 250px; */
    margin: 0;
    padding: 0;
    list-style: none;
}

.sidebar-nav1 li {
    /* text-indent: 20px; */
    line-height: 40px;
}

.sidebar-nav1 li a {
    display: block;
    text-decoration: none;
    color: #999999;
}

.sidebar-nav1 li a:hover {
    text-decoration: none;
    color: #fff;
    background: rgba(255,255,255,0.2);
}

.sidebar-nav1 li a:active,
.sidebar-nav1 li a:focus {
    text-decoration: none;
}

.sidebar-nav1 > .sidebar-brand {
    height: 65px;
    font-size: 18px;
    line-height: 60px;
}

.sidebar-nav1 > .sidebar-brand a {
    color: #999999;
}

.sidebar-nav1 > .sidebar-brand a:hover {
    color: #fff;
    background: none;
}
</style>