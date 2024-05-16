<template>
  <div>
    <navbar />
    <main class="profile-page">
      <section class="relative block h-500-px">
        <div
          class="absolute top-0 w-full h-full bg-center bg-cover"
          style="
            background-image: url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80');
          "
        >
          <span
            id="blackOverlay"
            class="w-full h-full absolute opacity-50 bg-black"
          ></span>
        </div>
        <div
          class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
          style="transform: translateZ(0);"
        >
          <svg
            class="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              class="text-blueGray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </section>
      <section class="relative py-16 bg-blueGray-200">
        <div class="container mx-auto px-4">
          <div
            class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64"
          >
            <div class="px-6">
              <div class="flex flex-wrap justify-center">
                <div
                  class="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center"
                >
                  <div class="relative">
                    <img
                      alt="..."
                      :src="imagen"
                      class="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                    />
                  </div>
                </div>
                <div
                  class="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center"
                >
                  <div class="py-6 px-3 mt-32 sm:mt-0">
                    <!-- <button
                      class="bg-emerald-500 active:bg-emerald-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                      type="button"
                    >
                      Connect
                    </button> -->
                  </div>
                </div>
                <div class="w-full lg:w-4/12 px-4 lg:order-1">
                  <div class="flex justify-center py-4 lg:pt-4 pt-8">
                    <div class="mr-4 p-3 text-center">
                      <span
                        class="text-xl font-bold block uppercase tracking-wide text-blueGray-600"
                      >
                        <!-- 22 -->
                      </span>
                      <!-- <span class="text-sm text-blueGray-400">Friends</span> -->
                    </div>
                    <div class="mr-4 p-3 text-center">
                      <span
                        class="text-xl font-bold block uppercase tracking-wide text-blueGray-600"
                      >
                        <!-- 10 -->
                      </span>
                      <!-- <span class="text-sm text-blueGray-400">Photos</span> -->
                    </div>
                    <div class="lg:mr-4 p-3 text-center">
                      <span
                        class="text-xl font-bold block uppercase tracking-wide text-blueGray-600"
                      >
                        <!-- 89 -->
                      </span>
                      <!-- <span class="text-sm text-blueGray-400">Comments</span> -->
                    </div>
                  </div>
                </div>
              </div>
              <div class="text-center mt-6">
                <h3
                  class="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 "
                >
                  {{ data.nombre}} <b class="text-primary font-bold">{{ data.apellido }}</b>
                </h3>
                <div
                  class="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase"
                >
                  <font-awesome :icon="['fas', 'map-marker']"
                    class=" mr-2 text-lg text-blueGray-400"
                  />
                  {{ data.direccion }}
                </div>
                <div class="mb-2 text-blueGray-600 mt-5">
                  <font-awesome :icon="['fas', 'briefcase']"
                    class="fas fa-briefcase mr-2 text-lg text-blueGray-400"
                  />
                  {{ data.ocupacion }}
                </div>
                <!-- <div class="mb-2 text-blueGray-600">
                  <font-awesome :icon="['fas', '']"
                    class="fas fa-university mr-2 text-lg text-blueGray-400"
                  />
                  {{ data. }}
                </div> -->
              </div>
              <div class=" py-10 border-t border-blueGray-200 text-center transition duration-700">
                <div class="flex flex-wrap justify-center">
                  <div class="w-full lg:w-9/12 px-4 transition-all ease-in-out duration-300 overflow-hidden "
                  :style="`max-height: ${heightMax}em`"
                  >
                    <p v-for="descripcion, index in data.descripcion" class="mb-4 text-lg leading-relaxed text-blueGray-700"
                    :key="index">
                      {{ descripcion }}
                    </p>
                  </div>
                  <button
                    v-if="showMore === true"
                    @click="
                      showMore = false,
                      lineClamp = 'none',
                      heightMax = 41
                    "
                    class="font-normal text-emerald-500"
                  >
                    Show more
                </button>
                <button
                    v-else
                    class="font-normal text-pink-400"
                    @click="
                      showMore = true,
                      lineClamp = 6,
                      heightMax = 11
                    "

                  >
                    Show less
                </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <footer-component />
  </div>
</template>
<script setup lang="ts">
import Navbar from "@/components/Navbars/AuthNavbar.vue";
import FooterComponent from "@/components/Footers/Footer.vue";
import imagen from "@/assets/img/yo.jpeg"

const showMore = ref(true)
const lineClamp:Ref<6 | 'none'> = ref(6)
  const heightMax:Ref<11 | 41 > = ref(11)


const data = ref({
  nombre: 'David',
  apellido: 'Ostos',
  direccion: 'Valencia, Venezuela.',
  ocupacion: 'Developer Full Stack',
  descripcion: [
    "Como Desarrollador Full Stack apasionado por la tecnología y con un enfoque responsable, me especializo en ofrecer soluciones innovadoras utilizando JavaScript y su ecosistema. Mi experiencia abarca desde el desarrollo de Progressive Web Apps (PWA) y aplicaciones híbridas con Capacitor.js, hasta la creación de aplicaciones móviles, de escritorio y web que responden a las necesidades actuales del mercado.",
    "Mi dominio en NestJS y Vue.js me permite construir arquitecturas robustas y escalables, mientras que mi habilidad para trabajar con TypeORM dentro del entorno de NestJS me capacita para diseñar y gestionar bases de datos eficientes, establecer relaciones complejas y desarrollar APIs REST con autenticación y autorización avanzadas, adaptando las soluciones según los roles y accesos de los usuarios.",
    "En el ámbito de la infraestructura, poseo conocimientos sólidos en Apache, despliegue de proyectos en diversos dominios y la configuración de servidores con Ubuntu Server. Además, tengo una comprensión básica de servicios en la nube como AWS, lo que me permite implementar y gestionar aplicaciones en entornos cloud con confianza.",
    "La contenerización con Docker es otra de mis áreas de expertise, permitiéndome crear entornos de desarrollo reproducibles y manejar despliegues consistentes, lo que asegura una integración y entrega continuas eficientes."

  ]
  



  
})

</script>
