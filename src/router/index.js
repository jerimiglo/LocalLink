import { createRouter, createWebHistory } from "vue-router";
import Search from "@/views/Search.vue";
import NewTour from "@/views/NewTour.vue";
import TouristProfile from "@/views/TouristProfile.vue";
import TourGuideProfile from "@/views/TourGuideProfile.vue";
import EditTourGuideProfile from "@/views/EditTourGuideProfile.vue";
import Review from "@/views/Review.vue";
import Chat from "@/views/Chat.vue";
import Logout from "@/views/Logout.vue";
import Listings from "@/views/Listings.vue";
import ListingsNature from "@/views/ListingsNature.vue";
import ListingsAdv from "@/views/ListingsAdv.vue";
import ListingsBeach from "@/views/ListingsBeach.vue";
import EditUserProfile from "@/views/EditUserProfile.vue";
// import SignUp from '@/views/SignUp.vue'
import RegisterTourist from '@/views/RegisterTourist.vue'
import LoginTourist from '@/views/LoginTourist.vue'
import RegisterTourGuide from '@/views/RegisterTourGuide.vue'
import LoginTourGuide from '@/views/LoginTourGuide.vue'
import Landing from '@/views/Landing.vue'

const routes = [
    {
    path: '/',
    name: 'Landing',
    component: Landing
    },
    {
    path: '/logintourguide',
    name: 'LoginTourGuide',
    component: LoginTourGuide
    },
    {
    path: '/registertourguide',
    name: 'RegisterTourGuide',
    component: RegisterTourGuide
    },
    {
    path: '/logintourist',
    name: 'LoginTourist',
    component: LoginTourist
    },
    {
    path: '/registertourist',
    name: 'RegisterTourist',
    component: RegisterTourist
    },
    // {
    // path: '/signup',
    // name: 'SignUp',
    // component: SignUp
    // },
    {
    path: '/search',
    name: 'Search',
    component: Search
    },
    {
      path: "/newtour",
      name: "NewTour",
      component: NewTour,
    },
    {
    path: '/touristProfile',
    name: 'TouristProfile',
    component: TouristProfile
    },
    {
      path: '/editUserProfile',
      name: 'EditUserProfile',
      component: EditUserProfile
      },
    {
    path: '/tourGuideProfile',
    name: 'TourGuideProfile',
    component: TourGuideProfile
    },
    {
    path: '/editTourGuideProfile',
    name: 'EditTourGuideProfile',
    component: EditTourGuideProfile
    },
    {
    path: '/review',
    name: 'Review',
    component: Review
    },
    {
    path: '/chat',
    name: 'Chat',
    component: Chat
    },
    {
    path: '/logout',
    name: 'Logout',
    component: Logout
    },    

    {
      path: "/listings",
      name: "Listings",
      component: Listings,
    },
    {
      path: "/listingsnature",
      name: "ListingsNature",
      component: ListingsNature,
    },
    {
      path: "/listingsadv",
      name: "ListingsAdv",
      component: ListingsAdv,
    },
    {
      path: "/listingsbeach",
      name: "ListingsBeach",
      component: ListingsBeach,
    }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;