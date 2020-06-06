export const slugifyArticle = (title) => {
  const titleSlug = title.toString()
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')      // Replace spaces with '-'
    .replace(/[^\w\-]+/g, '')  // Remove all non-word chars
    .replace(/\-\-+/g, '-');   // Replace multiple '-' with single '-'

  return titleSlug;
}

export const dateFormat = (date) => {
  const newDate = new Date(date);

  const yearFormatted = newDate.getFullYear();
  const dateFormatted = newDate.getDate();

  let frenchMonth;

  const mounthFormatted = newDate.getMonth();
  switch (mounthFormatted) {
    case 0:
      frenchMonth = "Janvier";
      break;
    case 1:
      frenchMonth = "Février";
      break;
    case 2:
      frenchMonth = "Mars";
      break;
    case 3:
      frenchMonth = "Avril";
      break;
    case 4:
      frenchMonth = "Mai";
      break;
    case 5:
      frenchMonth = "Juin";
      break;
    case 6:
      frenchMonth = "Juillet";
      break;
    case 7:
      frenchMonth = "Août";
      break;
    case 8:
      frenchMonth = "Septembre";
      break;
    case 9:
      frenchMonth = "Octobre";
      break;
    case 10:
      frenchMonth = "Novembre";
      break;
    case 11:
      frenchMonth = "Décembre";
      break;
  }

  // let frenchDay;

  // const day = newDate.getDay();
  // switch (day) {
  //   case 0:
  //     frenchDay = "Dimanche";
  //     break;
  //   case 1:
  //     frenchDay = "Lundi";
  //     break;
  //   case 2:
  //     frenchDay = "Mardi";
  //     break;
  //   case 3:
  //     frenchDay = "Mercredi";
  //     break;
  //   case 4:
  //     frenchDay = "Jeudi";
  //     break;
  //   case 5:
  //     frenchDay = "Vendredi";
  //     break;
  //   case 6:
  //     frenchDay = "Samedi";
  //     break;
  // }

  return `${dateFormatted} ${frenchMonth} ${yearFormatted}`;
}
