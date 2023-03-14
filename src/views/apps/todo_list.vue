<template>
    <div class="layout-px-spacing todo-list">
        <portal to="breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Apps</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Todo List</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </portal>

        <div class="row layout-top-spacing">
            <div class="col-xl-12 col-lg-12 col-md-12">
                <div class="mail-box-container">
                    <div class="mail-overlay" :class="{ 'mail-overlay-show': is_show_task_menu }" @click="is_show_task_menu = false"></div>

                    <div class="tab-title" :class="{ 'mail-menu-show': is_show_task_menu }">
                        <div class="row">
                            <div class="col-md-12 col-sm-12 col-12 text-center">
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
                                    class="feather feather-clipboard"
                                >
                                    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                                    <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                                </svg>
                                <h5 class="app-title">Todo List</h5>
                            </div>

                            <perfect-scrollbar class="todoList-sidebar-scroll">
                                <div class="col-md-12 col-sm-12 col-12 mt-4 pl-0">
                                    <b-tabs pills v-model="tab_index" nav-class="d-block">
                                        <b-tab button-id="all-list" @click="tab_changed('')">
                                            <template #title>
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
                                                Inbox
                                                <span class="todo-badge badge">
                                                    {{ task_list && task_list.filter(d => d.status != 'trash').length }}
                                                </span>
                                            </template>
                                        </b-tab>
                                        <b-tab button-id="todo-task-done" @click="tab_changed('complete')">
                                            <template #title>
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
                                                    class="feather feather-thumbs-up"
                                                >
                                                    <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                                                </svg>
                                                Done
                                                <span class="todo-badge badge">
                                                    {{ task_list && task_list.filter(d => d.status == 'complete').length }}
                                                </span>
                                            </template>
                                        </b-tab>
                                        <b-tab button-id="todo-task-important" @click="tab_changed('important')">
                                            <template #title>
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
                                                Important
                                                <span class="todo-badge badge">
                                                    {{ task_list && task_list.filter(d => d.status == 'important').length }}
                                                </span>
                                            </template>
                                        </b-tab>
                                        <b-tab button-id="todo-task-trash" @click="tab_changed('trash')">
                                            <template #title>
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
                                                    class="feather feather-trash-2"
                                                >
                                                    <polyline points="3 6 5 6 21 6"></polyline>
                                                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                                    <line x1="10" y1="11" x2="10" y2="17"></line>
                                                    <line x1="14" y1="11" x2="14" y2="17"></line>
                                                </svg>
                                                Trash
                                            </template>
                                        </b-tab>
                                    </b-tabs>
                                </div>
                            </perfect-scrollbar>

                            <a class="btn" id="addTask" href="javascript:;" @click="edit_task()">
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
                                New Task
                            </a>
                        </div>
                    </div>

                    <div id="todo-inbox" class="accordion todo-inbox">
                        <div class="search">
                            <b-input v-model="search_task" class="input-search" v-on:keyup="search_tasks()" placeholder="Search Here..." />
                            <div class="d-flex align-items-center" @click="is_show_task_menu = !is_show_task_menu">
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
                            </div>
                        </div>

                        <div class="todo-box">
                            <perfect-scrollbar class="todo-box-scroll" :options="{ wheelSpeed: 0.5, swipeEasing: !0, minScrollbarLength: 40, maxScrollbarLength: 300, suppressScrollX: true }">
                                <div v-for="task in filtered_task_list" class="todo-item all-list" :class="{ 'todo-task-done': task.status == 'complete' }" :key="task.task_id">
                                    <div class="todo-item-inner">
                                        <b-checkbox variant="primary" class="checkbox-primary new-control" :checked="task.status == 'complete'" @change="task_complete(task)"></b-checkbox>

                                        <div class="todo-content" @click="view_task(task)">
                                            <h5 class="todo-heading">{{ task.title }}</h5>
                                            <p class="meta-date">{{ task.date }}</p>
                                            <p class="todo-text">{{ task.description_text }}</p>
                                        </div>

                                        <div class="priority-dropdown">
                                            <b-dropdown :right="true" toggle-tag="a" variant="icon-only" :toggle-class="priority_class(task)">
                                                <template #button-content>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        style="width:24px;height:24px;"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        class="feather feather-alert-octagon"
                                                    >
                                                        <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
                                                        <line x1="12" y1="8" x2="12" y2="12"></line>
                                                        <line x1="12" y1="16" x2="12" y2="16"></line>
                                                    </svg>
                                                </template>

                                                <b-dropdown-item link-class="danger" @click="set_priority(task, 'high')">
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
                                                        class="feather feather-alert-octagon"
                                                    >
                                                        <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
                                                        <line x1="12" y1="8" x2="12" y2="12"></line>
                                                        <line x1="12" y1="16" x2="12" y2="16"></line>
                                                    </svg>
                                                    High
                                                </b-dropdown-item>
                                                <b-dropdown-item link-class="warning" @click="set_priority(task, 'middle')">
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
                                                        class="feather feather-alert-octagon"
                                                    >
                                                        <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
                                                        <line x1="12" y1="8" x2="12" y2="12"></line>
                                                        <line x1="12" y1="16" x2="12" y2="16"></line>
                                                    </svg>
                                                    Middle
                                                </b-dropdown-item>
                                                <b-dropdown-item link-class="primary" @click="set_priority(task, 'low')">
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
                                                        class="feather feather-alert-octagon"
                                                    >
                                                        <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
                                                        <line x1="12" y1="8" x2="12" y2="12"></line>
                                                        <line x1="12" y1="16" x2="12" y2="16"></line>
                                                    </svg>
                                                    Low
                                                </b-dropdown-item>
                                            </b-dropdown>
                                        </div>

                                        <div class="action-dropdown">
                                            <b-dropdown :right="true" toggle-tag="a" variant="icon-only">
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

                                                <template v-if="task.status == 'trash'">
                                                    <b-dropdown-item @click="delete_task(task, 'delete_permanent')">Permanent Delete</b-dropdown-item>
                                                    <b-dropdown-item @click="delete_task(task, 'restore')">Revive Task</b-dropdown-item>
                                                </template>
                                                <template v-else>
                                                    <b-dropdown-item @click="edit_task(task)">Edit</b-dropdown-item>
                                                    <b-dropdown-item v-if="task.status == 'important'" @click="set_important(task)">Back to List</b-dropdown-item>
                                                    <b-dropdown-item v-else @click="set_important(task)">Important</b-dropdown-item>
                                                    <b-dropdown-item @click="delete_task(task, 'delete')">Delete</b-dropdown-item>
                                                </template>
                                            </b-dropdown>
                                        </div>
                                    </div>
                                </div>
                            </perfect-scrollbar>
                        </div>
                    </div>
                </div>

                <!-- Modal -->
                <b-modal centered id="todoShowListItem" :hide-header="true" content-class="todolist-popup">
                    <div @click="$bvModal.hide('todoShowListItem')">
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
                    <div class="compose-box" v-if="selected_task">
                        <div class="compose-content">
                            <h5 class="task-heading">{{ selected_task.title }}</h5>
                            <p class="task-text overflow-auto" v-html="selected_task.description"></p>
                        </div>
                    </div>

                    <template #modal-footer>
                        <b-button variant="default" data-dismiss="modal" @click="$bvModal.hide('todoShowListItem')">
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
                            Close
                        </b-button>
                    </template>
                </b-modal>

                <b-modal centered id="addTaskModal" :hide-header="true" content-class="todolist-popup">
                    <div @click="$bvModal.hide('addTaskModal')">
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
                            <h5 class="">{{ params.task_id ? 'Update Task' : 'Add Task' }}</h5>
                            <b-form>
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="d-flex mail-to mb-4">
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
                                                class="feather feather-edit-3 flaticon-notes"
                                            >
                                                <path d="M12 20h9"></path>
                                                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                                            </svg>
                                            <div class="w-100">
                                                <b-input v-model="params.title" placeholder="Task Title"></b-input>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="d-flex  mail-subject mb-4">
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
                                        class="feather feather-file-text flaticon-menu-list flex-shrink-0"
                                    >
                                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                        <polyline points="14 2 14 8 20 8"></polyline>
                                        <line x1="16" y1="13" x2="8" y2="13"></line>
                                        <line x1="16" y1="17" x2="8" y2="17"></line>
                                        <polyline points="10 9 9 9 8 9"></polyline>
                                    </svg>
                                    <div class="w-100">
                                        <quill-editor ref="editor" v-model="params.description" :options="editor_options" style="min-height:200px;"></quill-editor>
                                    </div>
                                </div>
                            </b-form>
                        </div>
                    </div>

                    <template #modal-footer>
                        <b-button variant="default" data-dismiss="modal" @click="$bvModal.hide('addTaskModal')"><i class="flaticon-cancel-12"></i> Discard</b-button>
                        <b-button variant="default" class="add-tsk" @click="save_task()">{{ params.task_id ? 'Update' : 'Add' }}</b-button>
                    </template>
                </b-modal>
            </div>
        </div>
    </div>
</template>

<style>
    .todo-inbox .todo-item .todo-item-inner .action-dropdown .dropdown-menu.show,
    .todo-inbox .todo-item .todo-item-inner .priority-dropdown .dropdown-menu.show {
        top: 10px !important;
    }

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
    import '@/assets/sass/apps/todolist.scss';

    import '@/assets/sass/components/custom-modal.scss';

    export default {
        metaInfo: { title: 'Chat Application' },
        components: {},
        data() {
            return {
                is_show_task_menu: false,
                params: { task_id: null, title: '', description: '' },
                tab_index: 0,
                task_list: [],
                filtered_task_list: [],
                search_task: '',
                selected_tab: '',
                selected_task: null,
                editor_options: {
                    modules: {
                        toolbar: [[{ header: [1, 2, false] }], ['bold', 'italic', 'underline'], ['image', 'code-block']]
                    }
                }
            };
        },
        mounted() {
            this.bind_task_list();
        },
        methods: {
            bind_task_list() {
                this.task_list = [
                    {
                        task_id: 1,
                        title: 'Meeting with Shaun Park at 4:50pm',
                        date: 'Aug, 07 2020',
                        description:
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.',
                        description_text:
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.',
                        priority: 'middle',
                        status: ''
                    },
                    {
                        task_id: 2,
                        title: 'Team meet at Starbucks',
                        date: 'Aug, 06 2020',
                        description:
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.',
                        description_text:
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.',
                        priority: 'low',
                        status: ''
                    },
                    {
                        task_id: 3,
                        title: 'Meet Lisa to discuss project details',
                        date: 'Aug, 05 2020',
                        description:
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.',
                        description_text:
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.',
                        priority: 'middle',
                        status: 'complete'
                    },
                    {
                        task_id: 4,
                        title: 'Download Complete',
                        date: 'Aug, 04 2020',
                        description:
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.',
                        description_text:
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.',
                        priority: 'low',
                        status: ''
                    },
                    {
                        task_id: 5,
                        title: 'Conference call with Marketing Manager',
                        date: 'Aug, 03 2020',
                        description:
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.',
                        description_text:
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.',
                        priority: 'high',
                        status: 'important'
                    },
                    {
                        task_id: 6,
                        title: 'New User Registered',
                        date: 'Aug, 02 2020',
                        description:
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.',
                        description_text:
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.',
                        priority: 'middle',
                        status: 'important'
                    },
                    {
                        task_id: 7,
                        title: 'Fix issues in new project',
                        date: 'Aug, 01 2020',
                        description:
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.',
                        description_text:
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.',
                        priority: 'middle',
                        status: ''
                    },
                    {
                        task_id: 8,
                        title: 'Check All functionality',
                        date: 'Aug, 07 2020',
                        description:
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.',
                        description_text:
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.',
                        priority: 'middle',
                        status: 'important'
                    },
                    {
                        task_id: 9,
                        title: 'Check Repository',
                        date: 'Aug, 07 2020',
                        description:
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.',
                        description_text:
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.',
                        priority: 'middle',
                        status: 'complete'
                    },
                    {
                        task_id: 10,
                        title: 'Trashed Tasks',
                        date: 'Aug, 08 2020',
                        description:
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.',
                        description_text:
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.',
                        priority: 'middle',
                        status: 'trash'
                    },
                    {
                        task_id: 11,
                        title: 'Trashed Tasks 2',
                        date: 'Aug, 09 2020',
                        description:
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.',
                        description_text:
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.',
                        priority: 'middle',
                        status: 'trash'
                    },
                    {
                        task_id: 12,
                        title: 'Trashed Tasks 3',
                        date: 'Aug, 10 2020',
                        description:
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.',
                        description_text:
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.',
                        priority: 'middle',
                        status: 'trash'
                    }
                ];
                this.search_tasks();
            },
            tab_changed(type) {
                this.selected_tab = type;
                this.search_tasks();
                this.is_show_task_menu = false;
            },
            search_tasks() {
                let res;
                if (this.selected_tab) {
                    res = this.task_list.filter(d => d.status == this.selected_tab);
                } else {
                    res = this.task_list.filter(d => d.status != 'trash');
                }
                this.filtered_task_list = res.filter(d => d.title.toLowerCase().includes(this.search_task));
            },
            priority_class(task) {
                if (task.priority == 'low') {
                    return 'primary';
                } else if (task.priority == 'middle') {
                    return 'warning';
                } else if (task.priority == 'high') {
                    return 'danger';
                }
            },
            set_priority(task, name) {
                task.priority = name;
            },
            task_complete(task) {
                if (!task.status) {
                    task.status = 'complete';
                } else {
                    task.status = '';
                }
            },
            set_important(task) {
                if (task.status == 'important') {
                    task.status = '';
                    this.tab_index = 0;
                    this.tab_changed('');
                } else {
                    task.status = 'important';
                }
            },
            delete_task(task, type) {
                if (type == 'delete') {
                    task.status = 'trash';
                }
                if (type == 'delete_permanent') {
                    this.task_list = this.task_list.filter(d => d.task_id != task.task_id);
                } else if (type == 'restore') {
                    task.status = '';
                }
                this.search_tasks();
            },
            view_task(task) {
                this.selected_task = task;
                this.$bvModal.show('todoShowListItem');
            },
            edit_task(task) {
                this.params = { task_id: null, title: '', description: '' };
                if (task) {
                    this.params = JSON.parse(JSON.stringify(task));
                }
                this.$bvModal.show('addTaskModal');
            },
            save_task() {
                if (!this.params.title) {
                    this.$bvToast.toast('Title is required.', { headerClass: 'd-none', bodyClass: 'toast-danger', toaster: 'b-toaster-top-center', autoHideDelay: 1000 });
                    return false;
                }
                let description_text = this.$refs.editor.quill.getText();
                if (this.params.task_id) {
                    //update task
                    let task = this.task_list.find(d => d.task_id == this.params.task_id);
                    task.title = this.params.title;
                    task.description = this.params.description;
                    task.description_text = description_text;
                } else {
                    //add task
                    const max_task_id = this.task_list.reduce((max, character) => (character.task_id > max ? character.task_id : max), this.task_list[0].task_id);

                    let today = new Date();
                    var dd = String(today.getDate()).padStart(2, '0');
                    var mm = String(today.getMonth()); //January is 0!
                    var yyyy = today.getFullYear();
                    var monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

                    let task = {
                        task_id: max_task_id + 1,
                        title: this.params.title,
                        description: this.params.description,
                        description_text: description_text,
                        date: monthNames[mm] + ', ' + dd + ' ' + yyyy,
                        priority: 'low',
                        status: ''
                    };
                    this.task_list.splice(0, 0, task);
                    this.search_tasks();
                }

                this.$bvModal.hide('addTaskModal');
                this.$bvToast.toast('Task saved successfully.', { headerClass: 'd-none', bodyClass: 'toast-success', toaster: 'b-toaster-top-center', autoHideDelay: 1000 });
            }
        }
    };
</script>
