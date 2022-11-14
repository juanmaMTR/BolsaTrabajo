import React, { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  UserGroupIcon,
  UserPlusIcon,
  UserCircleIcon,
  HomeIcon,
  BriefcaseIcon,
  EnvelopeIcon,
  AcademicCapIcon,
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import {
    Link,
  } from "react-router-dom";

const solutions = [
    {
        name: 'Inicio',
        description: 'Get a better understanding of where your traffic is coming from.',
        href: '/21',
        icon: HomeIcon,
    },
    {
        name: 'Usuarios',
        description: 'Get a better understanding of where your traffic is coming from.',
        href: '#',
        icon: UserCircleIcon,
    },
    {
        name: 'Ofertas',
        description: 'Speak directly to your customers in a more meaningful way.',
        href: '#',
        icon: AcademicCapIcon,
    },
    { name: 'Empresas', description: "Your customers' data will be safe and secure.", href: '#', icon: BriefcaseIcon},
]
const usuarios = [
  {
    name: 'Listado de usuarios',
    description: 'Listado de usuarios, donde puedes eliminar y editar.',
    href: '/21/listar_u',
    icon: UserGroupIcon,
  },
  {
    name: 'Alta de usuarios',
    description: 'Alta de usuarios, donde podrás añadir usuarios a la base de datos.',
    href: '/21/alta_u',
    icon: UserPlusIcon,
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  return (
    <Popover className="relative bg-white">
      <div className="mx-auto px-4 sm:px-6">
        <div className="flex items-center border-b-2 border-gray-100 justify-between py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="/21/">
              <span className="sr-only">BolsaTrabajo</span>
              <img
                className="h-8 w-auto sm:h-10"
                src="https://raw.githubusercontent.com/juanmaMTR/bolsatrabajo/jdBranch/src/assets/imgs/LogoVirgendeGuadalupe.png"
                alt=""
              />
            </a>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden space-x-10 md:flex">
            <div className='relative'>
                <a className="text-gray-500 group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 hover:bg-sky-200 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2">
                    <HomeIcon className="h-6 w-6 flex-shrink-0 text-sky-600" aria-hidden="true" />
                    <Link className='w-full' to="/21/">Inicio</Link>
                </a>
            </div>
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-gray-900' : 'text-gray-500',
                      'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 hover:bg-sky-200 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:ring-offset-2'
                    )}
                  >
                    <UserCircleIcon className="h-6 w-6 flex-shrink-0 text-sky-600" aria-hidden="true" />
                    <span>Usuarios</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-gray-600' : 'text-gray-400',
                        'ml-2 h-5 w-5 group-hover:text-gray-500'
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {usuarios.map((item) => (
                            <a
                              key={item.name}
                              className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                            ><Link className='w-full' to={item.href}>
                                <item.icon className="h-6 w-6 flex-shrink-0 text-sky-600" aria-hidden="true" />
                                <div className="ml-4">
                                    <p className="text-base font-medium text-gray-900">{item.name}</p>
                                    <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                </div>
                              </Link>
                            </a>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
            <div className='relative'>
              <a href="#" className="text-gray-500 group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 hover:bg-sky-200 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2">
              <AcademicCapIcon className="h-6 w-6 flex-shrink-0 text-sky-600" aria-hidden="true" />
                Ofertas
              </a>
            </div>
            <div className='relative'>
              <a href="#" className="text-gray-500 group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 hover:bg-sky-200 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2">
              <BriefcaseIcon className="h-6 w-6 flex-shrink-0 text-sky-600" aria-hidden="true" />
                Empresas
              </a>
            </div>
            <div className='relative'>
                <a href="#" className="text-gray-500 group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 hover:bg-sky-200 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2">
                  <EnvelopeIcon className="h-6 w-6 flex-shrink-0 text-sky-600" aria-hidden="true" />
                  Contacto
                </a>
            </div>

            {/* Botón de "more" por si acaso se utiliza más adelante */}
            {/* <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-gray-900' : 'text-gray-500',
                      'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2'
                    )}
                  >
                    <span>More</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-gray-600' : 'text-gray-400',
                        'ml-2 h-5 w-5 group-hover:text-gray-500'
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {resources.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                            >
                              <item.icon className="h-6 w-6 flex-shrink-0 text-sky-600" aria-hidden="true" />
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">{item.name}</p>
                                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                              </div>
                            </a>
                          ))}
                        </div>
                        <div className="bg-gray-50 px-5 py-5 sm:px-8 sm:py-8">
                          <div>
                            <h3 className="text-base font-medium text-gray-500">Recent Posts</h3>
                            <ul role="list" className="mt-4 space-y-4">
                              {recentPosts.map((post) => (
                                <li key={post.id} className="truncate text-base">
                                  <a href={post.href} className="font-medium text-gray-900 hover:text-gray-700">
                                    {post.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="mt-5 text-sm">
                            <a href="#" className="font-medium text-sky-600 hover:text-sky-500">
                              View all posts
                              <span aria-hidden="true"> &rarr;</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover> */}
          </Popover.Group>
          <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
            <a
              className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-blue-500 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-600"
            >
              <Link className='w-full' to="/21/login">Sign in</Link>
            </a>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden z-10">
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="https://moodle.fundacionloyola.com/pluginfile.php/188/mod_label/intro/Logo%20Virgen%20de%20Guadalupe.png"
                    alt="BolsaTrabajo"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500">
                    <span className="sr-only">Cerrar menú</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {solutions.map((item) => (
                    <>
                      <a
                        key={item.name}
                        className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                      >
                        <Link to={item.href}>
                          <item.icon className="h-6 w-6 flex-shrink-0 text-sky-600" aria-hidden="true" />
                          <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                        </Link>                      
                      </a>
                      <Popover className="relative">
                        {({ open }) => (
                          <>
                            <Popover.Button
                              className={classNames(
                                open ? 'text-gray-900' : 'text-gray-500',
                                'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 hover:bg-sky-200 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:ring-offset-2'
                              )}
                            >
                              <UserCircleIcon className="h-6 w-6 flex-shrink-0 text-sky-600" aria-hidden="true" />
                              <span>{item.name}</span>
                              <ChevronDownIcon
                                className={classNames(
                                  open ? 'text-gray-600' : 'text-gray-400',
                                  'ml-2 h-5 w-5 group-hover:text-gray-500'
                                )}
                                aria-hidden="true"
                              />
                            </Popover.Button>

                            <Transition
                              as={Fragment}
                              enter="transition ease-out duration-200"
                              enterFrom="opacity-0 translate-y-1"
                              enterTo="opacity-100 translate-y-0"
                              leave="transition ease-in duration-150"
                              leaveFrom="opacity-100 translate-y-0"
                              leaveTo="opacity-0 translate-y-1"
                            >
                              <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                  <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                    {usuarios.map((item) => (
                                      <a
                                        key={item.name}
                                        className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                                      ><Link className='w-full' to={item.href}>
                                          <item.icon className="h-6 w-6 flex-shrink-0 text-sky-600" aria-hidden="true" />
                                          <div className="ml-4">
                                              <p className="text-base font-medium text-gray-900">{item.name}</p>
                                              <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                          </div>
                                        </Link>
                                      </a>
                                    ))}
                                  </div>
                                </div>
                              </Popover.Panel>
                            </Transition>
                          </>
                        )}
                      </Popover>
                    </>
                  ))}
                </nav>
              </div>
            </div>
            <div className="space-y-6 py-6 px-5">
              <div>
                <a
                  href="#"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-sky-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-sky-700"
                >
                  <Link className='w-full' to="/21/login">Sign in</Link>
                </a>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
