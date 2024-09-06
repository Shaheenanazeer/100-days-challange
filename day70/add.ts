// Homepage Interface Declaration
interface HomepageSettings {
  readonly theme: boolean;
  font: string;
}

// Articles Page Interface Reopening
interface ArticlesSettings extends HomepageSettings {
  sidebar: boolean;
}

// Contact Page Interface Reopening
interface ContactSettings extends ArticlesSettings {
  external: boolean;
}


let userSettings: ContactSettings = {
  theme: true,
  font: "Open Sans",
  sidebar: false,
  external: true,
};
console.log(userSettings);



 