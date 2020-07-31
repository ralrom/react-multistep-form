import GeneralInfo from "./steps/GeneralInfo";
import VisitType from "./steps/VisitType";
import CatKitchen from "./steps/CatKitchen";

export const defaultValues = {
  demo: false,
  lunch: false,
};

export const steps = [
  { key: "generalInfo", component: GeneralInfo },
  { key: "visitType", component: VisitType },
  { key: "catKitchen", component: CatKitchen, conditions: (fields) => fields.lunch === true },
];

export const texts = [
  {
    key: "generalInfo",
    header: {
      title: "Crée ta visite et identifie ses besoins",
      description:
        "Les informations que tu remplis ici serviront à préparer l’accueil des visiteurs à la réception et à sélectionner les services que tu nécessites.",
    },
    breadcrumb: {
      title: "General Info",
    },
  },
  {
    key: "visitType",
    breadcrumb: {
      title: "Visit Type",
    },
    header: {
      title: "Sélectionne le style de visite que tu voudrais que tes invités expérimentent.",
      description:
        "On te laisse libre de choisir la formule que tu souhaites offrir à tes visiteurs; mais on te recommande fortement d’opter pour la formule Backstage.",
    },
  },
  {
    key: "catKitchen",
    breadcrumb: {
      title: "Cat Kitchen",
    },
    header: {
      title: "Passe ta commande de bouffe pour le déjeuner, le lunch ou les deux.",
      description:
        "On ne peut pas prédire ce qui sera au menu cette journée-là, mais on sait certainement que l’équipe de la CatKitchen pourra accommoder la plupart des restrictions alimentaires des visiteurs et ton équipe.",
    },
  },
];
