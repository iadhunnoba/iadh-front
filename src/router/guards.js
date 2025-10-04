import authService from '@/services/authService';

/**
 * Configurar guard de autenticación para el router
 * @param {VueRouter} router - Instancia del router de Vue
 */
export function setupAuthGuard(router) {
    router.beforeEach((to, from, next) => {
        const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
        const isAuthenticated = authService.isAuthenticated();
        const requiredRole = to.meta.role;

        // Rutas que requieren autenticación
        if (requiresAuth && !isAuthenticated) {
            next({
                path: '/auth/login-boxed',
                query: { redirect: to.fullPath } // Guardar la ruta original para redirigir después del login
            });
            return;
        }

        // Si está autenticado y trata de acceder al login, redirigir al dashboard
        if (to.path === '/auth/login-boxed' && isAuthenticated) {
            next('/');
            return;
        }

        // Verificar roles si es necesario
        if (requiredRole && !authService.hasRole(requiredRole)) {
            // No tiene el rol necesario
            next({
                path: '/pages/error403',
                replace: true
            });
            return;
        }

        next();
    });
}