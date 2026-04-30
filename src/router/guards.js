import authService from '@/services/authService';

// Redirección según el rol del usuario autenticado
function defaultRouteForRole(role) {
    if (role === 'estudiante') return '/mis-sesiones-rcp';
    return '/estudiantes';
}

export function setupAuthGuard(router) {
    router.beforeEach((to, from, next) => {
        const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
        const isAuthenticated = authService.isAuthenticated();
        const user = authService.getUser();
        const userRole = user ? user.role : null;

        // 1. Rutas que requieren autenticación
        if (requiresAuth && !isAuthenticated) {
            next({ path: '/auth/login-boxed', query: { redirect: to.fullPath } });
            return;
        }

        // 2. Si está autenticado y va al login, redirigir a su sección correspondiente
        if (to.path === '/auth/login-boxed' && isAuthenticated) {
            next(defaultRouteForRole(userRole));
            return;
        }

        // 3. Control de roles: si la ruta define roles permitidos, verificar
        const allowedRoles = to.meta.roles;
        if (allowedRoles && allowedRoles.length > 0) {
            if (!userRole || !allowedRoles.includes(userRole)) {
                // Redirigir a la sección correcta para su rol
                next({ path: defaultRouteForRole(userRole), replace: true });
                return;
            }
        }

        next();
    });
}
