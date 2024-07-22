import * as icons from "../../components/svg-icons";
import { SimulationImage } from "../../constants/images";
import { PlaceHolderImage } from "../../constants/placeholderImages";

export const PatientViews = [
  {
    label: "Top",
    imageType: "face",
    icon: <icons.TopIcon />,
  },
  {
    label: "Middle",
    imageType: "half",
    icon: <icons.MiddleIcon />,
  },
  {
    label: "legs",
    imageType: "legs",
    icon: <icons.BottomIcon />,
  },

  {
    label: "Full",
    imageType: "full",
    icon: <icons.FullIcon />,
  },
];

export const PatientPose = [
  {
    label: "Sleeping on bed",
    imageType: "half",
    icon: <icons.SleepingOnBedIcon />,
  },
  {
    label: "Setting Front",
    imageType: "settingFront",
    icon: <icons.SettingFront />,
  },
  {
    label: "Setting back",
    imageType: "settingBack",
    icon: <icons.SettingBack />,
  },
  {
    label: "Standing front",
    imageType: "standingFront",
    icon: <icons.StandingFront />,
  },
  {
    label: "standing back",
    imageType: "back",
    icon: <icons.StandingBack />,
  },
];

export const MalePatientImageRenderer = [
  {
    type: "half",
    image: SimulationImage.maleHalf,
    initial: { scale: 1.5 },
    animate: { scale: 1 },
    loadingSrc: PlaceHolderImage.malePatienthalf,
    dots: [
      {
        style: {
          top: "51.4%",
          left: "50.4%",
        },
        modalKey: "heartModal",
      },
      {
        style: {
          top: "48%",
          left: "47%",
        },
        modalKey: "lungsModal",
      },
      {
        style: {
          top: "55%",
          left: "47%",
        },
        modalKey: "liverModal",
      },
      {
        style: {
          top: "65%",
          left: "50.4%",
        },
        modalKey: "stomachModal",
      },
    ],
  },
  {
    type: "full",
    image: SimulationImage.maleFull,
    loadingSrc: PlaceHolderImage.malePatientFull,
    initial: { scale: 1.5 },
    animate: { scale: 1 },
  },
  {
    type: "legs",
    image: SimulationImage.maleLegs,
    loadingSrc: PlaceHolderImage.maleLegs,
    initial: { y: -100 },
    animate: { y: 0 },
  },
  {
    type: "face",
    image: SimulationImage.maleFace,
    loadingSrc: PlaceHolderImage.maleFace,
    initial: { y: 100 },
    animate: { y: 0 },
  },
  {
    type: "back",
    image: SimulationImage.maleBack,
    loadingSrc: PlaceHolderImage.maleBack,
    initial: { scale: 1.5 },
    animate: { scale: 1 },
    dots: [
      {
        style: {
          top: "35%",
          left: "52.2%",
        },
        modalKey: "heartModal",
      },
    ],
  },
  {
    type: "standingFront",
    image: SimulationImage.maleStandingFront,
    loadingSrc: PlaceHolderImage.maleStandingFront,
    initial: { scale: 1.5 },
    animate: { scale: 1 },
    dots: [
      {
        style: {
          top: "32%",
          left: "52.5%",
        },
        modalKey: "heartModal",
      },
      {
        style: {
          top: "30%",
          left: "47%",
        },
        modalKey: "heartModal",
      },
      {
        style: {
          top: "38%",
          left: "49%",
        },
        modalKey: "heartModal",
      },
      {
        style: {
          top: "47%",
          left: "50.5%",
        },
        modalKey: "heartModal",
      },
    ],
  },
  {
    type: "settingBack",
    image: SimulationImage.maleSettingBack,
    loadingSrc: PlaceHolderImage.maleSettingBack,
    initial: { scale: 1.5 },
    animate: { scale: 1 },
    dots: [
      {
        style: {
          top: "43%",
          left: "42.5%",
        },
        modalKey: "heartModal",
      },
    ],
  },
  {
    type: "settingFront",
    image: SimulationImage.maleSettingFront,
    loadingSrc: PlaceHolderImage.maleSettingFront,
    initial: { scale: 1.5 },
    animate: { scale: 1 },
    dots: [
      {
        style: {
          top: "47%",
          left: "51%",
        },
        modalKey: "heartModal",
      },
      {
        style: {
          top: "44%",
          left: "46%",
        },
        modalKey: "heartModal",
      },
      {
        style: {
          top: "53%",
          left: "47%",
        },
        modalKey: "heartModal",
      },
      {
        style: {
          top: "60%",
          left: "49.6%",
        },
        modalKey: "heartModal",
      },
    ],
  },
];

export const FemalePatientImageRenderer = [
  {
    type: "half",
    image: SimulationImage.femaleHalf,
    initial: { scale: 1.5 },
    animate: { scale: 1 },
    dots: [
      {
        style: {
          top: "49%",
          left: "48%",
        },
        modalKey: "heartModal",
      },
      {
        style: {
          top: "46%",
          left: "43%",
        },
        modalKey: "lungsModal",
      },
      {
        style: {
          top: "53%",
          left: "45%",
        },
        modalKey: "liverModal",
      },
      {
        style: {
          top: "62%",
          left: "46.5%",
        },
        modalKey: "stomachModal",
      },
    ],
  },
  {
    type: "full",
    image: SimulationImage.maleFull,
    initial: { scale: 1.5 },
    animate: { scale: 1 },
  },
  {
    type: "legs",
    image: SimulationImage.maleLegs,
    initial: { y: -100 },
    animate: { y: 0 },
  },
  {
    type: "face",
    image: SimulationImage.maleFace,
    initial: { y: 100 },
    animate: { y: 0 },
  },
  {
    type: "back",
    image: SimulationImage.maleBack,
    initial: { scale: 1.5 },
    animate: { scale: 1 },
    dots: [
      {
        style: {
          top: "35%",
          left: "52.2%",
        },
        modalKey: "heartModal",
      },
    ],
  },
  {
    type: "standingFront",
    image: SimulationImage.maleStandingFront,
    initial: { scale: 1.5 },
    animate: { scale: 1 },
    dots: [
      {
        style: {
          top: "32%",
          left: "52.5%",
        },
        modalKey: "heartModal",
      },
      {
        style: {
          top: "30%",
          left: "47%",
        },
        modalKey: "heartModal",
      },
      {
        style: {
          top: "38%",
          left: "49%",
        },
        modalKey: "heartModal",
      },
      {
        style: {
          top: "47%",
          left: "50.5%",
        },
        modalKey: "heartModal",
      },
    ],
  },
  {
    type: "settingBack",
    image: SimulationImage.maleSettingBack,
    initial: { scale: 1.5 },
    animate: { scale: 1 },
    dots: [
      {
        style: {
          top: "43%",
          left: "42.5%",
        },
        modalKey: "heartModal",
      },
    ],
  },
  {
    type: "settingFront",
    image: SimulationImage.maleSettingFront,
    initial: { scale: 1.5 },
    animate: { scale: 1 },
    dots: [
      {
        style: {
          top: "47%",
          left: "51%",
        },
        modalKey: "heartModal",
      },
      {
        style: {
          top: "44%",
          left: "46%",
        },
        modalKey: "heartModal",
      },
      {
        style: {
          top: "53%",
          left: "47%",
        },
        modalKey: "heartModal",
      },
      {
        style: {
          top: "60%",
          left: "49.6%",
        },
        modalKey: "heartModal",
      },
    ],
  },
];

export const KidPatientImageRenderer = [
  {
    type: "half",
    image: SimulationImage.kidHalf,
    initial: { scale: 1.5 },
    animate: { scale: 1 },
    dots: [
      {
        style: {
          top: "49%",
          left: "51%",
        },
        modalKey: "heartModal",
      },
      {
        style: {
          top: "46%",
          left: "46%",
        },
        modalKey: "lungsModal",
      },
      {
        style: {
          top: "53%",
          left: "48%",
        },
        modalKey: "liverModal",
      },
      {
        style: {
          top: "65%",
          left: "49%",
        },
        modalKey: "stomachModal",
      },
    ],
  },
  {
    type: "full",
    image: SimulationImage.maleFull,
    initial: { scale: 1.5 },
    animate: { scale: 1 },
  },
  {
    type: "legs",
    image: SimulationImage.maleLegs,
    initial: { y: -100 },
    animate: { y: 0 },
  },
  {
    type: "face",
    image: SimulationImage.maleFace,
    initial: { y: 100 },
    animate: { y: 0 },
  },
  {
    type: "back",
    image: SimulationImage.maleBack,
    initial: { scale: 1.5 },
    animate: { scale: 1 },
    dots: [
      {
        style: {
          top: "35%",
          left: "52.2%",
        },
        modalKey: "heartModal",
      },
    ],
  },
  {
    type: "standingFront",
    image: SimulationImage.maleStandingFront,
    initial: { scale: 1.5 },
    animate: { scale: 1 },
    dots: [
      {
        style: {
          top: "32%",
          left: "52.5%",
        },
        modalKey: "heartModal",
      },
      {
        style: {
          top: "30%",
          left: "47%",
        },
        modalKey: "heartModal",
      },
      {
        style: {
          top: "38%",
          left: "49%",
        },
        modalKey: "heartModal",
      },
      {
        style: {
          top: "47%",
          left: "50.5%",
        },
        modalKey: "heartModal",
      },
    ],
  },
  {
    type: "settingBack",
    image: SimulationImage.maleSettingBack,
    initial: { scale: 1.5 },
    animate: { scale: 1 },
    dots: [
      {
        style: {
          top: "43%",
          left: "42.5%",
        },
        modalKey: "heartModal",
      },
    ],
  },
  {
    type: "settingFront",
    image: SimulationImage.maleSettingFront,
    initial: { scale: 1.5 },
    animate: { scale: 1 },
    dots: [
      {
        style: {
          top: "47%",
          left: "51%",
        },
        modalKey: "heartModal",
      },
      {
        style: {
          top: "44%",
          left: "46%",
        },
        modalKey: "heartModal",
      },
      {
        style: {
          top: "53%",
          left: "47%",
        },
        modalKey: "heartModal",
      },
      {
        style: {
          top: "60%",
          left: "49.6%",
        },
        modalKey: "heartModal",
      },
    ],
  },
];
