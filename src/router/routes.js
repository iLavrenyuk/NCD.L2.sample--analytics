export const routes = {
  Home: '/',
  Dashboard: '/dashboard',
  AddChart: '/add-chart',
};

export const hashRoutes = {
  About: '#about',
  HowItWorks: '#how-it-works',
  Opportunities: '#opportunities',
};

export const anchorRoutes = Object.fromEntries(Object.entries(hashRoutes).map(([key, item]) => [key, item.slice(1)]));
