<template>
  <section
    class="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8 ml-4 mr-4"
  >
    <div
      class="rounded-lg bg-gray-50 shadow-2xl ring-1 pt-2 ring-gray-900/5 mx-4 my-12"
    >
      <dl class="flex flex-wrap">
        <div class="flex-auto pl-6 pt-6">
          <div class="flex items-center justify-center">
            <div>
              <img
                class="h-16 w-16 rounded-xl mx-auto"
                src="@/assets/dedeim.jpg"
                alt="User's picture"
              />
            </div>
          </div>
          <div class="flex items-center justify-center">
            <div>
              <div class="pt-6 rounded-xl mx-auto">Welcome to DEDE member</div>
            </div>
          </div>
        </div>
        <div class="flex-none self-end px-6 pt-4">
          <dt class="sr-only"></dt>
        </div>
        <div class="flex-auto pl-6 pt-6">
          <div class="flex items-center">
            <div>
              <img
                class="inline-block h-9 w-9 rounded-full"
                :src="pictureUrl"
                alt="User's picture"
                v-if="pictureUrl"
              />
            </div>
            <div class="ml-3">
              <p class="text-sm font-medium text-gray-700 group-hover:text-gray-900" >
                {{ displayName }}
              </p>
            </div>
          </div>
          <div class="flex items-center mt-3">
            <div class="ml-3">
              Shop ID: {{ $route.params.shopid }}
            </div>
          </div>
          <div class="flex items-center mt-3">
            <div class="ml-3">
              <input type="text" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Phone number" />
            </div>
          </div>
          <div class="items-center mt-3 ">
            <div class="ml-3 ">
              <button type="button" class="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" @click="handleNext">Next</button>
            </div>
          </div>
        </div>
        <div class="mt-4 flex w-full flex-none gap-x-4 px-6">
          <dt class="flex-none">
            <span class="sr-only">{{ userId }}</span>
            <CalendarDaysIcon
              class="h-6 w-5 text-gray-400"
              aria-hidden="true"
            />
          </dt>
        </div>
        <!-- <div class="mt-4 flex w-full flex-none gap-x-4 px-6">
          <dd class="text-sm leading-6 text-gray-500">
            <p>profileID: {{ userId }}</p>
          </dd>
        </div>
        <div class="mt-4 flex w-full flex-none gap-x-4 px-6">
          <dd class="text-sm leading-6 text-gray-500">
            groupId: {{ groupId }}
          </dd>
        </div> -->
      </dl>
      <div class="mt-6 border-t border-gray-900/5 px-6 py-6">
        <a href="#" class="text-sm font-semibold leading-6 text-gray-900"
          >Enjoy with your meal <span aria-hidden="true"></span
        ></a>
      </div>
    </div>
    <div
      class="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20"
    ></div>
    <div
      class="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-orange-500 shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"
    > </div>
   
  </section>
  <div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import liff from "@line/liff";
import "primevue/resources/themes/saga-blue/theme.css"; // theme
import "primevue/resources/primevue.min.css"; // core css
import "primeicons/primeicons.css"; // icons

// Import PrimeVue button component

// Define the button component

const pictureUrl = ref("");
const userId = ref("");
const statusMessage = ref("");
const displayName = ref("");
const idToken = ref("");
const friend = ref("");
// const roomId = ref("");
// const groupId = ref("");
const isfriend = ref(true);
// onMounted(async () => {
//   liff.init(
//     { liffId: "2000714922-XOb4DG4e" },
//     async () => {
//       if (liff.isLoggedIn()) {
//         getUserprofile();
//         getEnvironment();
//         getContext();
//       } else {
//         liff.login();
//       }
//     },
//     (err) => console.error(err)
//   );
// });

// async function getUserprofile() {
//   try {
//     profile.value = await liff.getProfile();
//     console.log(profile.value);

//     if (profile.value) {
//       pictureUrl.value = profile.value.pictureUrl;
//       userId.value = profile.value.userId;
//       statusMessage.value = profile.value.statusMessage;
//       displayName.value = profile.value.displayName;
//       decodeIDToken.value = liff.getDecodedIDToken().email;
//     }
//   } catch (error) {
//     console.error("Error getting user profile:", error);
//   }
// }

// async function sendMsg() {
//   try {
//     if (liff.getContext().type !== "none") {
//       await liff.sendMessages([
//         {
//           type: "text",
//           text: userId.value,
//         },
//       ]);
//       console.log("Message sent successfully!");
//     }
//   } catch (error) {
//     console.error("Error in sending message", error);
//   }
// }

// function getContext() {
//   type.value = liff.getContext().type;
//   viewType.value = liff.getContext().viewType;
//   utouId.value = liff.getContext().utouId;
//   roomId.value = liff.getContext().roomId;
//   groupId.value = liff.getContext().groupId;
// }

// function getEnvironment() {
//   os.value = liff.getOS();
//   language.value = liff.getLanguage();
//   version.value = liff.getVersion();
//   accessToken.value = liff.getAccessToken();
//   isInClient.value = liff.isInClient();
// }
// function logout() {
//   liff.logout();
//   window.location.reload();
// }
async function getfriend() {
  try {
    const friendshipStatus = await liff.getFriendship();
    friend.value = friendshipStatus;
    return friend.value.friendFlag; // Ensure that 'friendFlag' is the correct property name
  } catch (error) {
    console.error("Error fetching friendship status:", error);
    return false;
  }
}
async function waitfriend() {
  isfriend.value = await getfriend();
  console.log(isfriend.value);
  if (isfriend.value == false) {
    alert("please add friend");
    // window.location.href = "https://lin.ee/qdbnDDV";
  } else {
    runApp();
  }
}

function handleNext(){
  console.log("handleNext");
}

function initLine() {
  liff.init(
    { liffId: "2001677131-XKqMJqML" },
    () => {
      if (liff.isLoggedIn()) {
        runApp();
        waitfriend();
      } else {
        // liff.login();
      }
    },
    (err) => console.error(err)
  );
}

function runApp() {
  idToken.value = liff.getAccessToken();

  console.log("lift Token: ", idToken.value);
  
  
  liff
    .getProfile()
    .then((profile) => {
      console.log(profile);
      displayName.value = profile.displayName;
      pictureUrl.value = profile.pictureUrl;
      statusMessage.value = profile.statusMessage;
      userId.value = profile.userId;
    })

    .catch((err) => console.error(err));
    authCloud();
  // sendMsg();
}

function authCloud(){
  axios.get("https://api.dev.dedepos.com", {}).then((res) => {
    console.log(res);
  });
}

onMounted(() => {
  initLine();
});
</script>

<style>
/* Add any style you want here */
</style>
<!-- if (liff.isLoggedIn()) {
  try {
    await liff.init({ liffId: "2000714922-XOb4DG4e" });
    getUserprofile();
    getEnvironment();
    getContext();
  } catch (error) {
    console.error("Error initializing LIFF:", error);
  }
} else {
  liff.login();
} -->
<!-- const os = ref("");
const language = ref("");
const version = ref("");
const accessToken = ref("");
const isInClient = ref(false);
const profile = ref("");
const decodeIDToken = ref("");
const type = ref("");
const viewType = ref("");
const utouId = ref(""); -->
