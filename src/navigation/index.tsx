import { ChartBarIcon, UserCircleIcon } from "@heroicons/react/outline";
import { Navigations } from "@src/typings/navigation";

const navigations: Navigations = [
  {
    id: "test",
    navLink: "/test",
    Icon: () => <ChartBarIcon className="w-6 h-6" />,
    title: "Dashboard",
  },
  {
    id: "user",
    navLink: "/users",
    Icon: () => <UserCircleIcon className="w-6 h-6" />,
    title: "Users",
  },
];

// NESTED NAVIGATION EX
/**
 const navigations: Navigations = [
  {
    id: "group-medical",
    navLink: "",
    Icon: () => <></>,
    title: "Medical",
    children: [
      {
        id: "SUBDCHD",
        navLink: "/group/SUBDCHD",
        Icon: () => <></>,
        title: "SUBDCHD",
      },
      {
        id: "medical-tsj",
        navLink: "/group/TSJ",
        Icon: () => <></>,
        title: "TSJ",
      },
      {
        id: "medical-PBFExt",
        navLink: "/group/PBFExt",
        Icon: () => <></>,
        title: "PBF Ext",
      },
      {
        id: "DDM",
        navLink: "/group-area/DDM-MED",
        Icon: () => <></>,
        title: "DDM",
      },
      {
        id: "HOR",
        navLink: "/group-area/HOR-MED",
        Icon: () => <></>,
        title: "HOR",
      },
      {
        id: "HOA",
        navLink: "/group-area/HOA-MED",
        Icon: () => <></>,
        title: "HOA",
      },
    ],
  },
  {
    id: "group-consumer",
    navLink: "",
    Icon: () => <></>,
    title: "Consumer",
    children: [
      {
        id: "group-kmmd",
        navLink: "",
        Icon: () => <></>,
        title: "KMMD",
        children: [
          {
            id: "KMMDB",
            navLink: "/group/KMMDB",
            Icon: () => <></>,
            title: "KMMD B",
          },
          {
            id: "KMMDC",
            navLink: "/group/KMMDC",
            Icon: () => <></>,
            title: "KMMD C",
          },
          {
            id: "KMMDBV",
            navLink: "/group/KMMDBVG",
            Icon: () => <></>,
            title: "KMMDBVG",
          },
        ],
      },
      {
        id: "ConsExt",
        navLink: "/group/ConsExt",
        Icon: () => <></>,
        title: "Cons Ext",
      },
      {
        id: "DDM",
        navLink: "/group-area/DDM-CONS",
        Icon: () => <></>,
        title: "DDM",
      },
      {
        id: "HOR",
        navLink: "/group-area/HOR-CONS",
        Icon: () => <></>,
        title: "HOR",
      },
      {
        id: "HOA",
        navLink: "/group-area/HOA-CONS",
        Icon: () => <></>,
        title: "HOA",
      },
    ],
  },
];
 * 
 */

export default navigations;
