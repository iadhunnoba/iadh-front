<template>
    <div class="layout-px-spacing mailbox">
        <portal to="breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Apps</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Mailbox</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </portal>

        <div class="row layout-top-spacing">
            <div class="col-xl-12 col-lg-12 col-md-12">
                <div class="row">
                    <div class="col-xl-12  col-md-12">
                        <div class="mail-box-container">
                            <div class="mail-overlay" :class="{ 'mail-overlay-show': is_show_mail_menu }" @click="is_show_mail_menu = false"></div>

                            <div class="tab-title" :class="{ 'mail-menu-show': is_show_mail_menu }">
                                <div class="row">
                                    <div class="col-md-12 col-sm-12 col-12 text-center mail-btn-container">
                                        <a id="btn-compose-mail" class="btn btn-block" href="javascript:void(0);" @click="open_mail('add')">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                class="feather feather-plus"
                                            >
                                                <line x1="12" y1="5" x2="12" y2="19"></line>
                                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                            </svg>
                                        </a>
                                    </div>
                                    <div class="col-md-12 col-sm-12 col-12 mail-categories-container">
                                        <perfect-scrollbar class="mail-sidebar-scroll">
                                            <ul class="nav nav-pills d-block" id="pills-tab" role="tablist">
                                                <li class="nav-item">
                                                    <a class="nav-link list-actions" :class="{ active: selected_tab == 'inbox' }" @click="tab_changed('inbox')">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="24"
                                                            height="24"
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            stroke-width="2"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            class="feather feather-inbox"
                                                        >
                                                            <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
                                                            <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
                                                        </svg>
                                                        <span class="nav-names">Inbox</span>
                                                        <span class="mail-badge badge">
                                                            {{ mail_list && mail_list.filter(d => !d.type || d.type == 'inbox').length }}
                                                        </span>
                                                    </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link list-actions" :class="{ active: selected_tab == 'important' }" @click="tab_changed('important')">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="24"
                                                            height="24"
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            stroke-width="2"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            class="feather feather-star"
                                                        >
                                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                                        </svg>
                                                        <span class="nav-names">Important</span>
                                                    </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link list-actions" :class="{ active: selected_tab == 'draft' }" @click="tab_changed('draft')">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="24"
                                                            height="24"
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            stroke-width="2"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            class="feather feather-mail"
                                                        >
                                                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                                            <polyline points="22,6 12,13 2,6" />
                                                        </svg>
                                                        <span class="nav-names">Draft</span>
                                                        <span class="mail-badge badge">
                                                            {{ mail_list && mail_list.filter(d => d.type == 'draft').length }}
                                                        </span>
                                                    </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link list-actions" :class="{ active: selected_tab == 'sent_mail' }" @click="tab_changed('sent_mail')">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="24"
                                                            height="24"
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            stroke-width="2"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            class="feather feather-send"
                                                        >
                                                            <line x1="22" y1="2" x2="11" y2="13"></line>
                                                            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                                                        </svg>
                                                        <span class="nav-names"> Sent Mail</span>
                                                    </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link list-actions" :class="{ active: selected_tab == 'spam' }" @click="tab_changed('spam')">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="24"
                                                            height="24"
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            stroke-width="2"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            class="feather feather-alert-circle"
                                                        >
                                                            <circle cx="12" cy="12" r="10"></circle>
                                                            <line x1="12" y1="8" x2="12" y2="12"></line>
                                                            <line x1="12" y1="16" x2="12" y2="16"></line>
                                                        </svg>
                                                        <span class="nav-names">Spam</span>
                                                    </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link list-actions" :class="{ active: selected_tab == 'trash' }" @click="tab_changed('trash')">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="24"
                                                            height="24"
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            stroke-width="2"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            class="feather feather-trash"
                                                        >
                                                            <polyline points="3 6 5 6 21 6"></polyline>
                                                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                                        </svg>
                                                        <span class="nav-names">Trash</span>
                                                    </a>
                                                </li>
                                            </ul>

                                            <p class="group-section">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    class="feather feather-tag"
                                                >
                                                    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
                                                    <line x1="7" y1="7" x2="7" y2="7"></line>
                                                </svg>
                                                Groups
                                            </p>

                                            <ul class="nav nav-pills d-block group-list" id="pills-tab2" role="tablist">
                                                <li class="nav-item">
                                                    <a class="nav-link list-actions g-dot-primary" :class="{ active: selected_tab == 'personal' }" @click="tab_changed('personal')">
                                                        <span>Personal</span>
                                                    </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link list-actions g-dot-warning" :class="{ active: selected_tab == 'work' }" @click="tab_changed('work')">
                                                        <span>Work</span>
                                                    </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link list-actions g-dot-success" :class="{ active: selected_tab == 'social' }" @click="tab_changed('social')">
                                                        <span>Social</span>
                                                    </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link list-actions g-dot-danger" :class="{ active: selected_tab == 'private' }" @click="tab_changed('private')">
                                                        <span>Private</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </perfect-scrollbar>
                                    </div>
                                </div>
                            </div>

                            <div id="mailbox-inbox" class="accordion mailbox-inbox">
                                <div class="search">
                                    <a @click="is_show_mail_menu = !is_show_mail_menu">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            class="feather feather-menu mail-menu d-lg-none"
                                        >
                                            <line x1="3" y1="12" x2="21" y2="12"></line>
                                            <line x1="3" y1="6" x2="21" y2="6"></line>
                                            <line x1="3" y1="18" x2="21" y2="18"></line>
                                        </svg>
                                    </a>
                                    <b-input v-model.trim="search_mail" class="input-search" v-on:keyup="search_mails()" placeholder="Search Here..." />
                                </div>

                                <div v-if="!selected_mail" class="action-center">
                                    <div class="">
                                        <b-checkbox :checked="check_all_checkbox" variant="primary" class="checkbox-primary new-control" @change="check_all($event)"
                                            ><span class="ml-2">Check All</span></b-checkbox
                                        >
                                    </div>

                                    <div>
                                        <template v-if="selected_tab != 'trash'">
                                            <b-dropdown :right="true" toggle-tag="a" variant="icon-only" menu-class="d-icon-menu" v-b-tooltip="{ customClass: 'mailbox-tooltip', title: 'Groups' }">
                                                <template #button-content>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        class="feather feather-bell"
                                                    >
                                                        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                                                        <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                                                    </svg>
                                                </template>

                                                <b-dropdown-item link-class="label-group-item label-personal position-relative g-dot-primary" @click="set_group('personal')">Personal</b-dropdown-item>
                                                <b-dropdown-item link-class="label-group-item label-work position-relative g-dot-warning" @click="set_group('work')">Work</b-dropdown-item>
                                                <b-dropdown-item link-class="label-group-item label-social position-relative g-dot-success" @click="set_group('social')">Social</b-dropdown-item>
                                                <b-dropdown-item link-class="label-group-item label-private position-relative g-dot-danger" @click="set_group('private')">Private</b-dropdown-item>
                                            </b-dropdown>

                                            <a v-b-tooltip="{ customClass: 'mailbox-tooltip', title: 'Important', placement: 'top' }" @click="set_important()">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    class="feather feather-star action-important"
                                                >
                                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                                </svg>
                                            </a>
                                            <a v-b-tooltip="{ customClass: 'mailbox-tooltip', title: 'Spam', placement: 'top' }" @click="set_spam()">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    class="feather feather-alert-circle action-spam"
                                                >
                                                    <circle cx="12" cy="12" r="10"></circle>
                                                    <line x1="12" y1="8" x2="12" y2="12"></line>
                                                    <line x1="12" y1="16" x2="12" y2="16"></line>
                                                </svg>
                                            </a>
                                            <b-dropdown :right="true" toggle-tag="a" variant="icon-only" class="more-actions">
                                                <template #button-content>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        class="feather feather-more-vertical"
                                                    >
                                                        <circle cx="12" cy="12" r="1"></circle>
                                                        <circle cx="12" cy="5" r="1"></circle>
                                                        <circle cx="12" cy="19" r="1"></circle>
                                                    </svg>
                                                </template>

                                                <b-dropdown-item link-class="action-mark_as_read" @click="set_action('read')">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        class="feather feather-book-open"
                                                    >
                                                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                                                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                                                    </svg>
                                                    Mark as Read
                                                </b-dropdown-item>
                                                <b-dropdown-item link-class="action-mark_as_read" @click="set_action('unread')">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        class="feather feather-book"
                                                    >
                                                        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                                                        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                                                    </svg>
                                                    Mark as Unread
                                                </b-dropdown-item>
                                                <b-dropdown-item link-class="action-mark_as_read" @click="set_action('trash')">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        data-toggle="tooltip"
                                                        data-placement="top"
                                                        data-original-title="Delete"
                                                        class="feather feather-trash-2"
                                                    >
                                                        <polyline points="3 6 5 6 21 6"></polyline>
                                                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                                        <line x1="10" y1="11" x2="10" y2="17"></line>
                                                        <line x1="14" y1="11" x2="14" y2="17"></line>
                                                    </svg>
                                                    Trash
                                                </b-dropdown-item>
                                            </b-dropdown>
                                        </template>
                                        <template v-else>
                                            <a v-b-tooltip title="Revive Mail" @click="set_action('restore')">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    class="feather feather-activity"
                                                >
                                                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                                                </svg>
                                            </a>
                                            <a v-b-tooltip title="Delete Permanently" @click="set_action('delete')">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    class="feather feather-trash"
                                                >
                                                    <polyline points="3 6 5 6 21 6"></polyline>
                                                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                                </svg>
                                            </a>
                                        </template>
                                    </div>
                                </div>

                                <div v-show="!selected_mail" class="message-box">
                                    <perfect-scrollbar class="message-box-scroll" id="ct">
                                        <div v-for="(item, index) in filtered_mail_list" :key="item.id + '' + index" class="mail-item" :class="{ unread: item.is_unread }" @click="select_mail(item)">
                                            <div class="animated fadeInUp">
                                                <div class="mb-0">
                                                    <div class="mail-item-heading">
                                                        <div class="mail-item-inner">
                                                            <div class="d-flex">
                                                                <div @click.stop="$event.stopPropagation()">
                                                                    <b-checkbox v-model="ids" variant="primary" class="checkbox-primary new-control mr-2" :value="item.id"></b-checkbox>
                                                                </div>
                                                                <div class="f-head">
                                                                    <img v-if="item.path" :src="require(`@/assets/images/${item.path}`)" class="user-profile" alt="avatar" />
                                                                    <div v-else-if="item.first_name" class="avatar avatar-sm">
                                                                        <span class="avatar-title rounded-circle">
                                                                            {{ item.first_name.charAt(0) + '' + item.last_name.charAt(0) }}
                                                                        </span>
                                                                    </div>
                                                                    <img v-else :src="require(`@/assets/images/user-avtar.svg`)" class="user-profile" alt="avatar" />
                                                                </div>
                                                                <div class="f-body">
                                                                    <div class="meta-mail-time">
                                                                        <p v-if="item.first_name" class="user-email">{{ item.first_name + ' ' + item.last_name }}</p>
                                                                        <p v-else class="user-email">{{ item.email }}</p>
                                                                    </div>
                                                                    <div class="meta-title-tag">
                                                                        <p class="mail-content-excerpt">
                                                                            <svg
                                                                                v-if="item.attachments && item.attachments.length"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width="24"
                                                                                height="24"
                                                                                viewBox="0 0 24 24"
                                                                                fill="none"
                                                                                stroke="currentColor"
                                                                                stroke-width="2"
                                                                                stroke-linecap="round"
                                                                                stroke-linejoin="round"
                                                                                class="feather feather-paperclip attachment-indicator"
                                                                            >
                                                                                <path
                                                                                    d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"
                                                                                ></path>
                                                                            </svg>
                                                                            <span class="mail-title">
                                                                                <template v-if="item.type == 'draft'">
                                                                                    Draft:
                                                                                </template>
                                                                                {{ item.title }} -
                                                                            </span>
                                                                            {{ item.display_description }}
                                                                        </p>
                                                                        <div class="tags">
                                                                            <span v-if="item.group == 'personal'" class="g-dot-primary d-inline-block"></span>
                                                                            <span v-if="item.group == 'work'" class="g-dot-warning d-inline-block"></span>
                                                                            <span v-if="item.group == 'social'" class="g-dot-success d-inline-block"></span>
                                                                            <span v-if="item.group == 'private'" class="g-dot-danger d-inline-block"></span>
                                                                        </div>
                                                                        <p class="meta-time align-self-center">{{ show_time(item) }}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div v-if="item.attachments && item.attachments.length" class="attachments">
                                                            <span v-for="(files, ind) in item.attachments" :key="'fl' + index + ind">{{ files.name }}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </perfect-scrollbar>
                                </div>

                                <div v-if="selected_mail" class="content-box" :class="{ 'w-100 left-0': selected_mail }">
                                    <div class="d-flex msg-close">
                                        <a @click="select_mail()">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                class="feather feather-arrow-left close-message"
                                            >
                                                <line x1="19" y1="12" x2="5" y2="12"></line>
                                                <polyline points="12 19 5 12 12 5"></polyline>
                                            </svg>
                                        </a>
                                        <h2 class="mail-title">{{ selected_mail.title }}</h2>
                                    </div>

                                    <perfect-scrollbar class="content-scroll">
                                        <div class="mail-content-container">
                                            <div class="d-flex justify-content-between mb-3">
                                                <div class="d-flex user-info">
                                                    <div class="f-head">
                                                        <img v-if="selected_mail.path" :src="require(`@/assets/images/${selected_mail.path}`)" class="user-profile" alt="avatar" />
                                                        <div v-else-if="selected_mail.first_name" class="avatar avatar-sm">
                                                            <span class="avatar-title rounded-circle">
                                                                {{ selected_mail.first_name.charAt(0) + '' + selected_mail.last_name.charAt(0) }}
                                                            </span>
                                                        </div>
                                                        <img v-else :src="require(`@/assets/images/user-avtar.svg`)" class="user-profile" alt="avatar" />
                                                    </div>
                                                    <div class="f-body">
                                                        <div class="meta-title-tag">
                                                            <h4 v-if="selected_mail.first_name" class="mail-usr-name">{{ selected_mail.first_name + ' ' + selected_mail.last_name }}</h4>
                                                            <h4 v-else class="mail-usr-name">{{ selected_mail.email }}</h4>
                                                        </div>
                                                        <div class="meta-mail-time">
                                                            <p class="user-email">{{ selected_mail.email }}</p>
                                                            <p class="mail-content-meta-date current-recent-mail ml-1">{{ selected_mail.date }} -</p>
                                                            <p class="meta-time align-self-center ml-1">{{ selected_mail.time }}</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="action-btns text-nowrap">
                                                    <a href="javascript:void(0);" v-b-tooltip title="Reply" @click="open_mail('reply', selected_mail)">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="24"
                                                            height="24"
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            stroke-width="2"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            class="feather feather-corner-up-left reply"
                                                        >
                                                            <polyline points="9 14 4 9 9 4"></polyline>
                                                            <path d="M20 20v-7a4 4 0 0 0-4-4H4"></path>
                                                        </svg>
                                                    </a>
                                                    <a href="javascript:void(0);" v-b-tooltip title="Forward" @click="open_mail('forward', selected_mail)">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="24"
                                                            height="24"
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            stroke-width="2"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            class="feather feather-corner-up-right forward"
                                                        >
                                                            <polyline points="15 14 20 9 15 4"></polyline>
                                                            <path d="M4 20v-7a4 4 0 0 1 4-4h12"></path>
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>

                                            <div v-html="selected_mail.description"></div>

                                            <p class="mt-4">Best Regards,</p>
                                            <p v-if="selected_mail.first_name">{{ selected_mail.first_name + ' ' + selected_mail.last_name }}</p>
                                            <p v-else>{{ selected_mail.email }}</p>

                                            <div v-if="selected_mail.attachments && selected_mail.attachments.length" class="attachments">
                                                <h6 class="attachments-section-title">Attachments</h6>
                                                <div v-for="(files, ind) in selected_mail.attachments" :key="'fle' + selected_mail.id + ind" class="attachment file-pdf file-folder file-img">
                                                    <div class="media">
                                                        <template v-if="files.type == 'image'">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="24"
                                                                height="24"
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                stroke-width="2"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                                class="feather feather-image"
                                                            >
                                                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                                                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                                                                <polyline points="21 15 16 10 5 21"></polyline>
                                                            </svg>
                                                        </template>
                                                        <template v-else-if="files.type == 'folder'">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="24"
                                                                height="24"
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                stroke-width="2"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                                class="feather feather-folder"
                                                            >
                                                                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                                                            </svg>
                                                        </template>
                                                        <template v-else-if="files.type == 'zip'">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="24"
                                                                height="24"
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                stroke-width="2"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                                class="feather feather-package"
                                                            >
                                                                <line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line>
                                                                <path
                                                                    d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
                                                                ></path>
                                                                <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                                                                <line x1="12" y1="22.08" x2="12" y2="12"></line>
                                                            </svg>
                                                        </template>
                                                        <template v-else="">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="24"
                                                                height="24"
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                stroke-width="2"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                                class="feather feather-file-text"
                                                            >
                                                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                                                <polyline points="14 2 14 8 20 8"></polyline>
                                                                <line x1="16" y1="13" x2="8" y2="13"></line>
                                                                <line x1="16" y1="17" x2="8" y2="17"></line>
                                                                <polyline points="10 9 9 9 8 9"></polyline>
                                                            </svg>
                                                        </template>
                                                        <div class="media-body">
                                                            <p class="file-name">{{ files.name }}</p>
                                                            <p class="file-size">{{ files.size }}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </perfect-scrollbar>
                                </div>
                            </div>
                        </div>

                        <!-- Modal -->
                        <b-modal centered id="composeMailModal" :hide-header="true" content-class="mailbox-popup">
                            <div @click="$bvModal.hide('composeMailModal')">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="feather feather-x close"
                                    data-dismiss="modal"
                                >
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                            </div>

                            <div class="compose-box">
                                <div class="compose-content">
                                    <form>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="d-flex mb-4 mail-form">
                                                    <p>From:</p>
                                                    <b-select v-model="params.from" size="sm">
                                                        <b-select-option value="info@mail.com">Info &lt;info@mail.com&gt;</b-select-option>
                                                        <b-select-option value="shaun@mail.com">Shaun Park &lt;shaun@mail.com&gt;</b-select-option>
                                                    </b-select>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="d-flex mb-4 mail-to">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        class="feather feather-user"
                                                    >
                                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                                        <circle cx="12" cy="7" r="4"></circle>
                                                    </svg>
                                                    <div class="">
                                                        <b-input v-model="params.to" type="email" placeholder="To"></b-input>
                                                        <span class="validation-text"></span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-md-6">
                                                <div class="d-flex mb-4 mail-cc">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        class="feather feather-list"
                                                    >
                                                        <line x1="8" y1="6" x2="21" y2="6"></line>
                                                        <line x1="8" y1="12" x2="21" y2="12"></line>
                                                        <line x1="8" y1="18" x2="21" y2="18"></line>
                                                        <line x1="3" y1="6" x2="3" y2="6"></line>
                                                        <line x1="3" y1="12" x2="3" y2="12"></line>
                                                        <line x1="3" y1="18" x2="3" y2="18"></line>
                                                    </svg>
                                                    <div>
                                                        <b-input v-model="params.cc" placeholder="Cc"></b-input>
                                                        <span class="validation-text"></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="d-flex mb-4 mail-subject">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                class="feather feather-mail"
                                            >
                                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                                <polyline points="22,6 12,13 2,6"></polyline>
                                            </svg>
                                            <div class="w-100">
                                                <b-input v-model="params.title" placeholder="Subject"></b-input>
                                                <span class="validation-text"></span>
                                            </div>
                                        </div>

                                        <div class="d-flex">
                                            <b-file v-model="params.file" :plain="true" :multiple="true" accept="image/*,.zip,.pdf,.xls,.xlsx,.txt.doc,.docx"></b-file>
                                        </div>

                                        <quill-editor ref="editor" v-model="params.description" :options="editor_options" style="min-height:200px;"></quill-editor>
                                    </form>
                                </div>
                            </div>

                            <template #modal-footer>
                                <b-button id="btn-save" v-if="mail_popup_type == 'add' || mail_popup_type == 'draft'" variant="default" @click="save_mail('save')">Save</b-button>
                                <b-button id="btn-reply-save" v-if="mail_popup_type == 'reply'" variant="default" @click="save_mail('save_reply')">Save Reply</b-button>
                                <b-button id="btn-fwd-save" v-if="mail_popup_type == 'forward'" variant="default" @click="save_mail('save_forward')">Save Fwd</b-button>

                                <b-button variant="default" data-dismiss="modal" @click="$bvModal.hide('composeMailModal')"><i class="flaticon-cancel-12"></i> Discard</b-button>

                                <b-button id="btn-reply" v-if="mail_popup_type == 'reply'" variant="primary" @click="save_mail('reply')">Reply</b-button>
                                <b-button id="btn-fwd" v-if="mail_popup_type == 'forward'" variant="primary" @click="save_mail('forward')">Forward</b-button>
                                <b-button id="btn-send" v-if="mail_popup_type == 'add' || mail_popup_type == 'draft'" variant="primary" @click="save_mail('send')">Send</b-button>
                            </template>
                        </b-modal>
                    </div>
                </div>
            </div>
        </div>

        <b-toast id="toast_msg" header-class="d-none" body-class="toast-dark d-flex justify-content-between" toaster="b-toaster-top-center">
            {{ message }}
            <a href="javascript:;" class="text-success ml-2" @click="$bvToast.hide('toast_msg')">DISMISS</a>
        </b-toast>
    </div>
</template>
<style>
    .ql-container,
    .ql-editor {
        min-height: inherit;
    }
    .ql-editor {
        max-height: 200px;
    }
    .ql-toolbar.ql-snow .ql-picker-label {
        border: 1px solid transparent;
        color: #4361ee;
    }
    .ql-snow .ql-stroke {
        fill: none;
        stroke: #4361ee;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 2;
    }
    .ql-snow .ql-fill,
    .ql-snow .ql-stroke.ql-fill {
        fill: #4361ee;
    }
    .ql-toolbar.ql-snow {
        border: 1px solid #bfc9d4;
        box-sizing: border-box;
        font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
        padding: 8px;
        border-radius: 6px;
    }
    .ql-container.ql-snow {
        border-top: 0px;
        margin-top: 28px;
        padding: 13px 0;
        border: 1px solid #bfc9d4 !important;
        border-radius: 6px;
    }
</style>
<script>
    import Vue from 'vue';
    import VueQuillEditor from 'vue-quill-editor';
    Vue.use(VueQuillEditor);
    import 'quill/dist/quill.core.css';
    import 'quill/dist/quill.snow.css';
    import 'quill/dist/quill.bubble.css';

    import '@/assets/sass/apps/mailbox.scss';

    let default_data = { id: null, from: 'info@mail.com', to: '', cc: '', title: '', file: null, description: '' };
    export default {
        metaInfo: { title: 'Mailbox' },
        components: {},
        computed: {
            check_all_checkbox() {
                if (this.filtered_mail_list.length && this.ids.length == this.filtered_mail_list.length) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        data() {
            return {
                is_show_mail_menu: false,
                mail_list: [],
                filtered_mail_list: [],
                search_mail: '',
                selected_tab: 'inbox',
                selected_mail: null,
                params: default_data,
                mail_popup_type: null,
                ids: [],
                editor_options: {
                    modules: {
                        toolbar: [[{ header: [1, 2, false] }], ['bold', 'italic', 'underline'], ['image', 'code-block']]
                    },
                    placeholder: 'Compose an epic...'
                },
                message: ''
            };
        },
        mounted() {
            this.bind_mail_list();
        },
        methods: {
            bind_mail_list() {
                let c_dt = new Date();
                this.mail_list = [
                    {
                        id: 1,
                        path: 'profile-16.jpeg',
                        first_name: 'Laurie',
                        last_name: 'Fox',
                        email: 'laurieFox@mail.com',
                        date: c_dt.getMonth() + 1 + '/' + c_dt.getDate() + '/' + c_dt.getFullYear(),
                        time: '2:00 PM',
                        title: 'Promotion Page',
                        display_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue.',
                        type: 'inbox',
                        is_important: false,
                        group: 'social',
                        is_unread: false,
                        attachments: [
                            { name: 'Confirm File.txt', size: '450KB', type: 'file' },
                            { name: 'Important Docs.xml', size: '2.1MB', type: 'file' }
                        ],
                        description: `
<p class="mail-content"> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </p>
<div class="gallery text-center">
    <img alt="image-gallery" src="${require('@/assets/images/scroll-6.jpeg')}" class="img-fluid mb-4 mt-4" style="width: 250px; height: 180px;">
    <img alt="image-gallery" src="${require('@/assets/images/scroll-7.jpeg')}" class="img-fluid mb-4 mt-4" style="width: 250px; height: 180px;">
    <img alt="image-gallery" src="${require('@/assets/images/scroll-8.jpeg')}" class="img-fluid mb-4 mt-4" style="width: 250px; height: 180px;">
</div>
<p>Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
`
                    },
                    {
                        id: 2,
                        path: 'profile-19.jpeg',
                        first_name: 'Andy',
                        last_name: 'King',
                        email: 'kingAndy@mail.com',
                        date: c_dt.getMonth() + 1 + '/' + c_dt.getDate() + '/' + c_dt.getFullYear(),
                        time: '6:28 PM',
                        title: 'Hosting Payment Reminder',
                        display_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue.',
                        type: 'inbox',
                        is_important: false,
                        group: '',
                        is_unread: false,
                        description: `
<p class="mail-content"> Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </p>
<p>Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
`
                    },
                    {
                        id: 3,
                        path: '',
                        first_name: 'Kristen',
                        last_name: 'Beck',
                        email: 'kirsten.beck@mail.com',
                        date: c_dt.getMonth() + 1 + '/' + c_dt.getDate() + '/' + c_dt.getFullYear(),
                        time: '11:09 AM',
                        title: 'Verification Link',
                        display_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue.',
                        type: 'inbox',
                        is_important: false,
                        group: 'social',
                        is_unread: true,
                        description: `
<p class="mail-content"> Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </p>
<p>Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
`
                    },
                    {
                        id: 4,
                        path: 'profile-34.jpeg',
                        first_name: 'Christian',
                        last_name: '',
                        email: 'christian@mail.com',
                        date: '11/30/2021',
                        time: '2:00 PM',
                        title: 'New Updates',
                        display_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue.',
                        type: 'inbox',
                        is_important: false,
                        group: 'private',
                        is_unread: false,
                        attachments: [{ name: 'update.zip', size: '1.38MB', type: 'zip' }],
                        description: `
<p class="mail-content"> Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </p>
<p>Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
`
                    },
                    {
                        id: 5,
                        path: 'profile-31.jpeg',
                        first_name: 'Roxanne',
                        last_name: '',
                        email: 'roxanne@mail.com',
                        date: '11/15/2021',
                        time: '2:00 PM',
                        title: 'Schedular Alert',
                        display_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue.',
                        type: 'inbox',
                        is_important: false,
                        group: 'personal',
                        is_unread: true,
                        description: `
<p class="mail-content"> Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </p>
<p>Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
`
                    },
                    {
                        id: 6,
                        path: 'profile-17.jpeg',
                        first_name: 'Nia',
                        last_name: 'Hillyer',
                        email: 'niahillyer@mail.com',
                        date: '08/16/2020',
                        time: '2:22 AM',
                        title: 'Motion UI Kit',
                        display_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue.',
                        type: 'inbox',
                        is_important: true,
                        group: '',
                        is_unread: false,
                        description: `
<p class="mail-content"> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</p>
<div class="gallery text-center">
    <img alt="image-gallery" src="${require('@/assets/images/scroll-6.jpeg')}" class="img-fluid mb-4 mt-4" style="width: 250px; height: 180px;">
    <img alt="image-gallery" src="${require('@/assets/images/scroll-7.jpeg')}" class="img-fluid mb-4 mt-4" style="width: 250px; height: 180px;">
    <img alt="image-gallery" src="${require('@/assets/images/scroll-8.jpeg')}" class="img-fluid mb-4 mt-4" style="width: 250px; height: 180px;">
</div>
<p>Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
`
                    },
                    {
                        id: 7,
                        path: 'profile-23.jpeg',
                        first_name: 'Iris',
                        last_name: 'Hubbard',
                        email: 'irishubbard@mail.com',
                        date: '08/16/2020',
                        time: '1:40 PM',
                        title: 'Green Illustration',
                        display_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue.',
                        type: 'inbox',
                        is_important: true,
                        group: '',
                        is_unread: false,
                        description: `
<p class="mail-content"> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </p>
<p>Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
`
                    },
                    {
                        id: 8,
                        path: '',
                        first_name: 'Ernest',
                        last_name: 'Reeves',
                        email: 'reevesErnest@mail.com',
                        date: '06/02/2020',
                        time: '8:25 PM',
                        title: 'Youtube',
                        display_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue.',
                        type: 'inbox',
                        is_important: true,
                        group: 'work',
                        is_unread: false,
                        description: `
<p class="mail-content"> Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </p>
<p>Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
`
                    },
                    {
                        id: 9,
                        path: 'profile-15.jpeg',
                        first_name: 'Info',
                        last_name: 'Company',
                        email: 'infocompany@mail.com',
                        date: '02/10/2020',
                        time: '7:00 PM',
                        title: '50% Discount',
                        display_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue.',
                        type: 'inbox',
                        is_important: false,
                        group: 'work',
                        is_unread: false,
                        description: `
<p class="mail-content"> Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </p>
<p>Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
`
                    },
                    {
                        id: 10,
                        path: '',
                        first_name: 'NPM',
                        last_name: 'Inc',
                        email: 'npminc@mail.com',
                        date: '12/15/2018',
                        time: '8:37 AM',
                        title: 'npm Inc',
                        display_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue.',
                        type: 'inbox',
                        is_important: false,
                        group: 'personal',
                        is_unread: true,
                        attachments: [{ name: 'package.zip', size: '450KB', type: 'zip' }],
                        description: `
<p class="mail-content"> Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </p>
<p>Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
`
                    },
                    {
                        id: 11,
                        path: 'profile-18.jpeg',
                        first_name: 'Marlene',
                        last_name: 'Wood',
                        email: 'marlenewood@mail.com',
                        date: '11/25/2018',
                        time: '1:51 PM',
                        title: 'eBill',
                        display_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue.',
                        type: 'inbox',
                        is_important: false,
                        group: 'personal',
                        is_unread: false,
                        description: `
<p class="mail-content"> Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </p>
<p>Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
`
                    },

                    {
                        id: 12,
                        path: '',
                        first_name: 'Keith',
                        last_name: 'Foster',
                        email: 'kf@mail.com',
                        date: '12/15/2018',
                        time: '9:30 PM',
                        title: 'Web Design News',
                        display_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue.',
                        type: 'draft',
                        is_important: false,
                        group: 'personal',
                        is_unread: false,
                        description: `
<p class="mail-content"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.</p>
`
                    },
                    {
                        id: 13,
                        path: '',
                        first_name: 'Amy',
                        last_name: 'Diaz',
                        email: 'amyDiaz@mail.com',
                        date: '12/15/2018',
                        time: '2:00 PM',
                        title: 'Ecommerce Analytics',
                        display_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue.',
                        type: 'draft',
                        is_important: false,
                        group: 'private',
                        is_unread: false,
                        description: `
<p class="mail-content"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.</p>
`
                    },

                    {
                        id: 14,
                        path: '',
                        first_name: 'Alan',
                        last_name: '',
                        email: 'alan@mail.com',
                        date: '12/16/2019',
                        time: '8:45 AM',
                        title: 'Mozilla Update',
                        display_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue.',
                        type: 'sent_mail',
                        is_important: false,
                        group: 'work',
                        is_unread: false,
                        attachments: [
                            { name: 'Confirm File', size: '450KB', type: 'file' },
                            { name: 'Important Docs', size: '2.1MB', type: 'folder' },
                            { name: 'Photo.png', size: '50kb', type: 'image' }
                        ],
                        description: `
<p class="mail-content"> Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </p>
<p>Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
`
                    },
                    {
                        id: 15,
                        path: '',
                        first_name: 'Justin',
                        last_name: 'Cross',
                        email: 'justincross@mail.com',
                        date: '09/14/219',
                        time: '3:10 PM',
                        title: 'App Project Checklist',
                        display_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue.',
                        type: 'sent_mail',
                        is_important: false,
                        group: '',
                        is_unread: false,
                        attachments: [
                            { name: 'Important Docs', size: '2.1MB', type: 'folder' },
                            { name: 'Photo.png', size: '50kb', type: 'image' }
                        ],
                        description: `
<p class="mail-content"> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </p>
<p>Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
`
                    },

                    {
                        id: 16,
                        path: 'profile-18.jpeg',
                        first_name: 'Alex',
                        last_name: 'Gray',
                        email: 'alexGray@mail.com',
                        date: '08/16/2019',
                        time: '10:18 AM',
                        title: 'Weekly Newsletter',
                        display_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue.',
                        type: 'spam',
                        is_important: false,
                        group: '',
                        is_unread: false,
                        attachments: [
                            { name: 'Confirm File', size: '450KB', type: 'file' },
                            { name: 'Important Docs', size: '2.1MB', type: 'folder' },
                            { name: 'Photo.png', size: '50kb', type: 'image' }
                        ],
                        description: `
<p class="mail-content"> Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </p>
<p>Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
`
                    },
                    {
                        id: 17,
                        path: 'profile-15.jpeg',
                        first_name: 'Info',
                        last_name: 'Company',
                        email: 'infocompany@mail.com',
                        date: '02/10/2018',
                        time: '7:00 PM',
                        title: '50% Discount',
                        display_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue.',
                        type: 'spam',
                        is_important: false,
                        group: 'work',
                        is_unread: false,
                        description: `
<p class="mail-content"> Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </p>
<p>Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
`
                    },
                    {
                        id: 18,
                        path: 'profile-18.jpeg',
                        first_name: 'Marlene',
                        last_name: 'Wood',
                        email: 'marlenewood@mail.com',
                        date: '11/25/2017',
                        time: '1:51 PM',
                        title: 'eBill',
                        display_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue.',
                        type: 'spam',
                        is_important: false,
                        group: 'personal',
                        is_unread: false,
                        description: `
<p class="mail-content"> Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </p>
<p>Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
`
                    },

                    {
                        id: 19,
                        path: 'profile-13.jpeg',
                        first_name: 'Ryan MC',
                        last_name: 'Killop',
                        email: 'ryanMCkillop@mail.com',
                        date: '08/17/2018',
                        time: '11:45 PM',
                        title: 'Make it Simple',
                        display_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue.',
                        type: 'trash',
                        is_important: false,
                        group: '',
                        is_unread: false,
                        description: `
<p class="mail-content"> Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </p>
<div class="gallery text-center">
    <img alt="image-gallery" src="${require('@/assets/images/scroll-6.jpeg')}" class="img-fluid mb-4 mt-4" style="width: 250px; height: 180px;">
    <img alt="image-gallery" src="${require('@/assets/images/scroll-7.jpeg')}" class="img-fluid mb-4 mt-4" style="width: 250px; height: 180px;">
    <img alt="image-gallery" src="${require('@/assets/images/scroll-8.jpeg')}" class="img-fluid mb-4 mt-4" style="width: 250px; height: 180px;">
</div>
<p>Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
`
                    },
                    {
                        id: 20,
                        path: 'profile-23.jpeg',
                        first_name: 'Liam',
                        last_name: 'Sheldon',
                        email: 'liamsheldon@mail.com',
                        date: '08/17/2018 ',
                        time: '11:45 PM',
                        title: 'New Offers',
                        display_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue.',
                        type: 'trash',
                        is_important: false,
                        group: '',
                        is_unread: false,
                        attachments: [{ name: 'Confirm File', size: '450KB', type: 'file' }],
                        description: `
<p class="mail-content"> Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </p>
<p>Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
`
                    }
                ];
                this.search_mails();
            },
            tab_changed(type) {
                this.selected_tab = type;
                this.search_mails();
                this.is_show_mail_menu = false;
            },
            search_mails() {
                let res;
                if (this.selected_tab == 'important') {
                    res = this.mail_list.filter(d => d.is_important);
                } else if (this.selected_tab == 'personal' || this.selected_tab == 'work' || this.selected_tab == 'social' || this.selected_tab == 'private') {
                    res = this.mail_list.filter(d => d.group == this.selected_tab);
                } else {
                    res = this.mail_list.filter(d => d.type == this.selected_tab);
                }
                this.filtered_mail_list = res.filter(
                    d =>
                        (d.title && d.title.toLowerCase().includes(this.search_mail)) ||
                        (d.first_name && d.first_name.toLowerCase().includes(this.search_mail)) ||
                        (d.last_name && d.last_name.toLowerCase().includes(this.search_mail)) ||
                        (d.display_description && d.display_description.toLowerCase().includes(this.search_mail))
                );

                this.clear_selection();
            },
            select_mail(item) {
                if (item) {
                    if (item.type != 'draft') {
                        if (item && item.is_unread) {
                            item.is_unread = false;
                        }
                        this.selected_mail = item;
                    } else {
                        this.open_mail('draft', item);
                    }
                } else {
                    this.selected_mail = '';
                }
            },
            show_time(item) {
                let display_dt = new Date(item.date);
                let c_dt = new Date();
                if (display_dt.toDateString() == c_dt.toDateString()) {
                    return item.time;
                } else {
                    if (display_dt.getFullYear() == c_dt.getFullYear()) {
                        var monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                        return monthNames[display_dt.getMonth()] + ' ' + String(display_dt.getDate()).padStart(2, '0');
                    } else {
                        return String(display_dt.getMonth() + 1).padStart(2, '0') + '/' + String(display_dt.getDate()).padStart(2, '0') + '/' + display_dt.getFullYear();
                    }
                }
            },
            check_all(is_checked) {
                if (is_checked) {
                    this.ids = this.filtered_mail_list.map(d => {
                        return d.id;
                    });
                } else {
                    this.clear_selection();
                }
            },
            clear_selection() {
                this.ids = [];
            },
            show_message(message) {
                this.message = message;
                this.$bvToast.show('toast_msg');
            },
            set_group(group) {
                if (this.ids.length) {
                    let items = this.filtered_mail_list.filter(d => this.ids.includes(d.id));
                    for (let item of items) {
                        item.group = group;
                    }

                    this.show_message(this.ids.length + ' Mail Grouped as ' + group.toUpperCase());
                    this.clear_selection();
                }
            },
            set_important() {
                if (this.ids.length) {
                    let items = this.filtered_mail_list.filter(d => this.ids.includes(d.id));
                    for (let item of items) {
                        item.is_important = !item.is_important;
                    }
                    if (this.selected_tab == 'important') {
                        this.show_message(this.ids.length + ' Mail removed from Important.');
                    } else {
                        this.show_message(this.ids.length + ' Mail added to Important.');
                    }
                    this.tab_changed('important');
                }
            },
            set_spam() {
                if (this.ids.length) {
                    let items = this.filtered_mail_list.filter(d => this.ids.includes(d.id));
                    for (let item of items) {
                        item.type = item.type == 'spam' ? 'inbox' : 'spam';
                    }

                    if (this.selected_tab == 'spam') {
                        this.show_message(this.ids.length + ' Mail removed from Spam.');
                    } else {
                        this.show_message(this.ids.length + ' Mail added to Spam.');
                    }
                    this.tab_changed('spam');
                }
            },
            set_action(type) {
                if (this.ids.length) {
                    let items = this.filtered_mail_list.filter(d => this.ids.includes(d.id));
                    for (let item of items) {
                        if (type == 'trash') {
                            item.type = 'trash';
                            this.show_message(this.ids.length + ' Mail deleted.');
                            this.tab_changed('trash');
                        } else if (type == 'read') {
                            item.is_unread = false;
                            this.show_message(this.ids.length + ' Mail marked as Read.');
                        } else if (type == 'unread') {
                            item.is_unread = true;
                            this.show_message(this.ids.length + ' Mail marked as UnRead.');
                        }
                        //restore & permanent delete
                        else if (type == 'restore') {
                            item.type = 'inbox';
                            this.show_message(this.ids.length + ' Mail Restored.');
                            this.tab_changed('inbox');
                        } else if (type == 'delete') {
                            this.mail_list = this.mail_list.filter(d => d.id != item.id);
                            this.show_message(this.ids.length + ' Mail Permanently Deleted.');
                            this.tab_changed('trash');
                        }
                    }
                    this.clear_selection();
                }
            },

            //
            open_mail(type, item) {
                this.mail_popup_type = type;
                if (type == 'add') {
                    this.params = JSON.parse(JSON.stringify(default_data));
                } else if (type == 'draft') {
                    let data = JSON.parse(JSON.stringify(item));
                    this.params = data;
                    this.params.from = default_data.from;
                    this.params.to = data.email;
                } else if (type == 'reply') {
                    let data = JSON.parse(JSON.stringify(item));
                    this.params = data;
                    this.params.from = default_data.from;
                    this.params.to = data.email;
                    this.params.title = 'Re: ' + this.params.title;
                } else if (type == 'forward') {
                    let data = JSON.parse(JSON.stringify(item));
                    this.params = data;
                    this.params.from = default_data.from;
                    this.params.to = data.email;
                    this.params.title = 'Fwd: ' + this.params.title;
                }
                this.$bvModal.show('composeMailModal');
            },
            save_mail(type) {
                if (!this.params.to) {
                    this.$bvToast.toast('To email address is required.', { headerClass: 'd-none', bodyClass: 'toast-danger', toaster: 'b-toaster-top-center', autoHideDelay: 1000 });
                    return true;
                }
                if (!this.params.title) {
                    this.$bvToast.toast('Subject is required.', { headerClass: 'd-none', bodyClass: 'toast-danger', toaster: 'b-toaster-top-center', autoHideDelay: 1000 });
                    return true;
                }

                let max_id = 0;
                if (!this.params.id) {
                    max_id = this.mail_list.reduce((max, character) => (character.id > max ? character.id : max), this.mail_list[0].id);
                }
                let c_dt = new Date();

                let obj = {
                    id: max_id + 1,
                    path: '',
                    first_name: '',
                    last_name: '',
                    email: this.params.to,
                    date: c_dt.getMonth() + 1 + '/' + c_dt.getDate() + '/' + c_dt.getFullYear(),
                    time: c_dt.toLocaleTimeString(),
                    title: this.params.title,
                    display_description: this.$refs.editor.quill.getText(),
                    type: 'draft',
                    is_important: false,
                    group: '',
                    is_unread: false,
                    description: this.params.description,
                    attachments: []
                };
                if (this.params.file && this.params.file.length) {
                    for (let file of this.params.file) {
                        let fl_obj = { name: file.name, size: this.get_file_size(file.size), type: this.get_file_type(file.type) };
                        obj.attachments.push(fl_obj);
                    }
                }

                if (type == 'save' || type == 'save_reply' || type == 'save_forward') {
                    //saved to draft

                    obj.type = 'draft';
                    this.mail_list.splice(0, 0, obj);
                    this.tab_changed('draft');

                    this.$bvToast.toast('Successfully Saved to Draft.', { headerClass: 'd-none', bodyClass: 'toast-success', toaster: 'b-toaster-top-center', autoHideDelay: 1000 });
                } else if (type == 'send' || type == 'reply' || type == 'forward') {
                    //saved to sent mail

                    obj.type = 'sent_mail';
                    this.mail_list.splice(0, 0, obj);
                    this.tab_changed('sent_mail');

                    this.$bvToast.toast('Mail Sent Successfully.', { headerClass: 'd-none', bodyClass: 'toast-success', toaster: 'b-toaster-top-center', autoHideDelay: 1000 });
                }

                this.selected_mail = null;
                this.$bvModal.hide('composeMailModal');
            },
            get_file_type(file_type) {
                let type = 'file';
                if (file_type.includes('image/')) {
                    type = 'image';
                } else if (file_type.includes('application/x-zip')) {
                    type = 'zip';
                }

                return type;
            },
            get_file_size(total_bytes) {
                let size = '';
                if (total_bytes < 1000000) {
                    size = Math.floor(total_bytes / 1000) + 'KB';
                } else {
                    size = Math.floor(total_bytes / 1000000) + 'MB';
                }
                return size;
            }
        }
    };
</script>
