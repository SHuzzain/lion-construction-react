// components/icons/iconsRender.tsx
import React from "react";
import {
  FaFileSignature,
  FaMountain,
  FaRocket,
  FaProjectDiagram,
  FaTools,
  FaHardHat,
  FaPlug,
  FaSolarPanel,
  FaDoorOpen,
  FaTree,
  FaFlagCheckered,
  FaClock,
  FaComments,
  FaDraftingCompass,
  FaUserCog,
  FaUsersCog,
  FaHandHoldingHeart,
} from "react-icons/fa";
import {
  MdRoofing,
  MdGroups3,
  MdGroup,
  MdOutlineBroadcastOnHome,
  MdFoundation,
  MdPlumbing ,
} from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { GiTeamIdea ,GiThermometerScale ,GiStrong,GiMultipleTargets ,GiBrickWall,GiExitDoor ,GiRanchGate  } from "react-icons/gi";
import { TbTargetArrow } from "react-icons/tb";
import { LiaHotelSolid } from "react-icons/lia";
import { BsBuildings } from "react-icons/bs";
import {FaPeopleRoof} from "react-icons/fa6";
import {GoPasskeyFill} from "react-icons/go";


const iconMap = {
  agreement: FaFileSignature,
  soil: FaMountain,
  kickoff: FaRocket,
  column: FaProjectDiagram,
  foundation: FaTools,
  roofSupport: FaHardHat,
  concreteRoof: MdRoofing,
  partition: FaProjectDiagram, // fallback
  plumbing: FaPlug,
  extras: FaSolarPanel,
  fixtures: FaDoorOpen,
  handover: FaFlagCheckered,

  // Newly added
  clock: FaClock, // React Icon
  conversation: FaComments, // React Icon
  blueprint: FaDraftingCompass, // React Icon
  engineering: FaUserCog, // React Icon
  tools: FaTools,
  crmteam: FaUsers,
  techteam: FaUsersCog,
  creativeteam: FaDraftingCompass,
  productionteam: FaTools,
  salesteam: MdGroups3,
  implementationteam: MdGroup,
  creativevalue: GiTeamIdea,
  honesty: FaHandHoldingHeart,
  quality: GiStrong,
  excellence: TbTargetArrow,
  smartdesign: MdOutlineBroadcastOnHome,
  commercialbuilding: BsBuildings,
  hotelinteriors: LiaHotelSolid,

  agreementsign: FaFileSignature,
  soiltesting: GiThermometerScale ,
  projectkickoff: MdGroup,
  columnplanning: GiMultipleTargets ,
  excavation: MdFoundation ,
  roofsupportsetup: MdRoofing   ,
  concreteroofpouring: FaPeopleRoof ,
  partitionwalls: GiBrickWall ,
  flooring: MdPlumbing  ,
  extrasinstallation:FaTools,
  doorswindows: GiExitDoor ,
  outdoorentrancedesign:GiRanchGate ,
  handovercelebration:GoPasskeyFill ,

};

const IconRenderer = ({ name, size, className = "" }) => {
  const Icon = iconMap[name];

  if (!Icon) {
    console.warn(`Icon "${name}" not found in iconMap.`);
    return null;
  }

  return <Icon size={size ? size : 42} className={className} />;
};

export default IconRenderer;
