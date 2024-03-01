let personName  = "ziyan-kaim-khani";
console.log("Lowercase:", personName.toLowerCase());
console.log("uppercase:", personName.toupperCase());
console.log("Titlecase:", personName.replace(/\b\w/g, char => char.toUpperCase()));

