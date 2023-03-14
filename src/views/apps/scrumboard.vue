<template>
    <div class="layout-px-spacing">

<portal to="breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Apps</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Scrumboard</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </portal>

        <div class="action-btn layout-top-spacing mb-5">
            <b-button id="add-list" variant="primary" @click="edit_project()">Add List</b-button>
        </div>

        <div class="row scrumboard" id="cancel-row">
            <div class="col-lg-12 layout-spacing">

                <div class="task-list-section">
                    <div v-for="project in project_list" :key="project.id" class="task-list-container">
                        <div class="connect-sorting">

                            <div class="task-container-header">
                                <h6 class="s-heading" data-listTitle="In Progress">{{project.title}}</h6>
                                <b-dropdown :right="true" toggle-tag="a" variant="icon-only">
                                    <template #button-content>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-horizontal"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                                    </template>

                                    <b-dropdown-item link-class="list-edit" @click="edit_project(project)">Edit</b-dropdown-item>
                                    <b-dropdown-item link-class="list-delete" @click="delete_project(project)">Delete</b-dropdown-item>
                                    <b-dropdown-item link-class="list-clear-all" @click="clear_project(project)">Clear All</b-dropdown-item>
                                </b-dropdown>
                            </div>

                            <draggable class="connect-sorting-content" group="default" ghost-class="ui-state-highlight" drag-class="ui-sortable-helper" :animation="200">

                                <div v-for="task in project.tasks" :key="project.id +''+ task.task_id" class="card task-text-progress cursor-move ui-sortable-handle">
                                    <div class="card-body">
                                        <div v-if="task.image" class="px-2 pt-2">
                                            <img src="@/assets/images/taskboard.jpg" class="img-fluid rounded" alt="scrumboard" />
                                        </div>

                                        <div class="task-header">
                                            <h4>{{task.title}}</h4>
                                        </div>

                                        <div class="task-body">
                                            <div v-if="task.description" class="task-content">
                                                <p>{{task.description}}</p>
                                            </div>
                                            <div class="task-bottom">
                                                <div class="tb-section-1">
                                                    <span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-calendar"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                                                        {{task.date}}
                                                    </span>
                                                </div>
                                                <div class="tb-section-2">
                                                    <a href="javascript:;" @click="edit_task(project.id, task)">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit-2 s-task-edit"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>
                                                    </a>
                                                    <a href="javascript:;" @click="delete_confirm(project.id, task)">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2 s-task-delete"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                                                    </a>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </draggable>

                            <div class="add-s-task">
                                <a href="javascript:;" class="addTask" @click="edit_task(project.id);">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus-circle"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg> Add Task
                                </a>
                            </div>

                        </div>
                    </div>


                </div>
            </div>
        </div>



        <!-- Modal -->
        <b-modal centered id="addListModal" :title="params.id ? 'Edit List' : 'Add List'">
            <div class="compose-box">
                <div class="compose-content" id="addListModalTitle">
                    <form action="javascript:void(0);">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="list-title">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-list"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3" y2="6"></line><line x1="3" y1="12" x2="3" y2="12"></line><line x1="3" y1="18" x2="3" y2="18"></line></svg>
                                    <b-input v-model="params.title" placeholder="List Name"></b-input>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <template #modal-footer>
                <b-button variant="default" data-dismiss="modal" @click="$bvModal.hide('addListModal')">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    Discard
                </b-button>
                <b-button variant="default" class="add-list" @click="save_project()">{{params.id ? 'Update List' : 'Add List'}}</b-button>
            </template>
        </b-modal>

        <b-modal centered id="addTaskModal" :title="params_task.task_id ? 'Edit Task' : 'Add Task'">
            <div class="compose-box">
                <div class="compose-content" id="addTaskModalTitle">
                    <div class="addTaskAccordion" id="add_task_accordion">
                        <div class="card task-text-progress">
                            <div id="collapseTwo" class="collapse show" aria-labelledby="headingTwo" data-parent="#add_task_accordion">
                                <div class="card-body">
                                    <form action="javascript:void(0);">
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="task-title mb-4">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit-3"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
                                                    <b-input v-model="params_task.title" placeholder="Task"></b-input>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="task-badge">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                                                    <b-textarea v-model="params_task.description" rows="5" placeholder="Task Text"></b-textarea>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <template #modal-footer>
                <b-button variant="default" data-dismiss="modal" @click="$bvModal.hide('addTaskModal')">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    Discard
                </b-button>
                <b-button variant="default" data-btnfn="addTask" class="add-tsk" @click="save_task()">{{params_task.task_id ? 'Update Task' : 'Add Task'}}</b-button>
            </template>
        </b-modal>

        <b-modal centered id="deleteConformation">
            <template #modal-header>
                <div class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                </div>
                <h5 class="modal-title" id="exampleModalLabel">Delete the task?</h5>
                <a href="javascript:;" class="close" data-dismiss="modal" @click="$bvModal.hide('deleteConformation')">
                    <span aria-hidden="true">&times;</span>
                </a>
            </template>

            <p class="">If you delete the task it will be gone forever. Are you sure you want to proceed?</p>

            <template #modal-footer>
                <b-button variant="default" data-dismiss="modal" @click="$bvModal.hide('deleteConformation')">Cancel</b-button>
                <b-button variant="danger" data-remove="task" @click="delete_task()">Delete</b-button>
            </template>
        </b-modal>

    </div>
</template>

<script>
    import '@/assets/sass/apps/scrumboard.scss';
    import draggable from 'vuedraggable'

    export default {
        metaInfo: { title: 'Scrum Task Board' },
        components: {
            draggable
        },
        data() {
            return {
                params: { id: null, title: '' },
                params_task: { project_id: null, task_id: null, title: '', description: '' },
                project_list: [],
                deleted_task: { project_id: null, task_id: null }
            };
        },
        mounted() {
            this.bind_project_list();
        },
        methods: {
            bind_project_list() {
                this.project_list = [
                    {
                        id: 1, title: 'In Progress',
                        tasks: [
                            { task_id: 1, title: 'Creating a new Portfolio on Dribble', description: '', image: true, date: ' 08 Aug, 2020' },
                            { task_id: 2, title: 'Singapore Team Meet', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', date: ' 09 Aug, 2020' },
                        ]
                    },
                    {
                        id: 2, title: 'Complete',
                        tasks: [
                            { task_id: 1, title: 'Dinner with Kelly Young', description: '', date: ' 08 Aug, 2020' },
                            { task_id: 2, title: 'Launch New SEO Wordpress Theme ', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', date: ' 09 Aug, 2020' },
                        ]
                    },
                    {
                        id: 3, title: 'New', tasks: []
                    }
                ];
            },
            //Project
            edit_project(project) {
                this.params = { id: null, title: '' };
                if (project) {
                    this.params = JSON.parse(JSON.stringify(project));
                }
                this.$bvModal.show('addListModal');
            },
            save_project() {
                if (!this.params.title) { this.$bvToast.toast('Title is required.', { headerClass: 'd-none', bodyClass: 'toast-danger', toaster: 'b-toaster-top-center', autoHideDelay: 1000 }); return true; }

                if (this.params.id) {
                    //update project
                    let project = this.project_list.find(d => d.id == this.params.id);
                    project.title = this.params.title;
                }
                else {
                    //add project
                    let max_project_id = this.project_list.reduce((max, character) => (character.id > max ? character.id : max), this.project_list[0].id);
                    if (!max_project_id) { max_project_id = 0; }

                    let project = {
                        id: max_project_id + 1,
                        title: this.params.title,
                        tasks: []
                    };
                    this.project_list.push(project);
                }

                this.$bvModal.hide('addListModal');
                this.$bvToast.toast('Project saved successfully.', { headerClass: 'd-none', bodyClass: 'toast-success', toaster: 'b-toaster-top-center', autoHideDelay: 1000 });
            },
            delete_project(project) {
                this.project_list = this.project_list.filter(d => d.id != project.id);
                this.$bvToast.toast('Project deleted successfully.', { headerClass: 'd-none', bodyClass: 'toast-success', toaster: 'b-toaster-top-center', autoHideDelay: 1000 });
            },
            clear_project(project) {
                project.tasks = [];
            },

            //Task
            edit_task(project_id, task) {
                this.params_task = { project_id: null, task_id: null, title: '', description: '' };
                if (task) {
                    this.params_task = JSON.parse(JSON.stringify(task));
                }
                this.params_task['project_id'] = project_id;
                this.$bvModal.show('addTaskModal');
            },
            save_task() {
                if (!this.params_task.title) { this.$bvToast.toast('Title is required.', { headerClass: 'd-none', bodyClass: 'toast-danger', toaster: 'b-toaster-top-center', autoHideDelay: 1000 }); return true; }

                let project = this.project_list.find(d => d.id == this.params_task.project_id);
                if (this.params_task.task_id) {
                    //update task
                    let task = project.tasks.find(d => d.task_id == this.params_task.task_id);
                    task.title = this.params_task.title;
                    task.description = this.params_task.description;
                }
                else {
                    //add task
                    let max_task_id = 0;
                    if (project.tasks.length) {
                        max_task_id = project.tasks.reduce((max, character) => (character.task_id > max ? character.task_id : max), project.tasks[0].task_id);
                    }


                    let today = new Date();
                    var dd = String(today.getDate()).padStart(2, '0');
                    var mm = String(today.getMonth()); //January is 0!
                    var yyyy = today.getFullYear();
                    var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

                    let task = {
                        task_id: max_task_id + 1,
                        title: this.params_task.title,
                        description: this.params_task.description,
                        date: dd + ' ' + monthNames[mm] + ', ' + yyyy,
                    };
                    project.tasks.push(task);
                }

                this.$bvModal.hide('addTaskModal');
                this.$bvToast.toast('Task saved successfully.', { headerClass: 'd-none', bodyClass: 'toast-success', toaster: 'b-toaster-top-center', autoHideDelay: 1000 });
            },

            delete_confirm(project_id, task) {
                this.deleted_task = { project_id: project_id, task_id: task.task_id };
                this.$bvModal.show('deleteConformation');
            },
            delete_task() {
                let project = this.project_list.find(d => d.id == this.deleted_task.project_id);
                project.tasks = project.tasks.filter(d => d.task_id != this.deleted_task.task_id);
                this.$bvToast.toast('Task deleted successfully.', { headerClass: 'd-none', bodyClass: 'toast-success', toaster: 'b-toaster-top-center', autoHideDelay: 1000 });
                this.$bvModal.hide('deleteConformation');
            }
        },
    };
</script>
