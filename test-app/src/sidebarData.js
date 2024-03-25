import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Profile',
    path: '/profile',
    icon: <IoIcons.IoMdPerson />,
    cName: 'nav-text'
  },
  {
    title: 'Queue',
    path: '/queue',
    icon: <FaIcons.FaPhone />,
    cName: 'nav-text'
  },
  {
    title: 'Recordings',
    path: '/recordings',
    icon: <FaIcons.FaVideo />,
    cName: 'nav-text'
  },
  {
    title: 'Team Members',
    path: '/team-members',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Resources',
    path: '/resources',
    icon: <FaIcons.FaBook />,
    cName: 'nav-text'
  },
  {
    title: 'Logout',
    path: '/logout',
    icon: <IoIcons.IoMdExit />,
    cName: 'nav-text'
  }
];
