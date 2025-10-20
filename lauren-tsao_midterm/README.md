# DM-GY 9103: Dynamic Web - Mid-term Project

## Brief

A two-week long project that showcase understanding of a few of the following topics:

- JSX and componentization.
- Passing data and functions through the Props system
- Component or App's local State using useState() hook
- Control over where and when a function fires in a component using useEffect() hook
- Retrieving data from an outside source by making an API request
- Navigating between "pages" the React way, using React-Router-DOM
- Installing and using external libraries via NPM
- Controlled components (input onChange handlers and value binding)

## Concept

I have never made a website that utilizes API calls before, so I decided to take this opportunity to create one since we just recently learned it the week before embarking on this project.

I was always fascinated with horoscopes, so I wanted to create a website where the user finds their zodiac constellation within a sea of stars. When they click on it, the horoscope for that zodiac and day would be revealed to them.

## Visual References & chosen API

I started gathering visual references on how I would like the overall aesthetic the website should take on. I created a Pinterest board which can be viewed [here](https://www.pinterest.com/enweitsao/dynamic-web-midterm/)

Finding the API was a challenge. I had one that was free with unlimited tokens, but unfortunately it was blocked by CORS Policy. I eventually found and used [this one](https://www.api-ninjas.com/api/horoscope) created by API Ninjas. 

## Milestone #1 - Creating the visual components

I wanted the Zodiacs to reveal themselves and their names when the user hovers their mouse over them. So I proceeded to create them using Figma, shown [here](https://www.figma.com/deck/NzcojBLfEuYpENr5VyH1NE/Lauren-Tsao---Dynamic-Web-Mid-term-Presentation?node-id=2004-4&viewport=-1066%2C-708%2C0.46&t=Q5Qy0wldm5qpr0Yc-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1)

## Milestone #2 - API Set-up & creating a data sheet for visual components

As taught in class, I proceeded to set up the API titled 'api.js' based on the code that Professor Adee provided.

Applying what I learned during the recipe-card tutorial in Week 02, I created a data sheet titled 'Constellation-data.js' to hold all my visual components to be called throughout the project, shown [here](https://www.figma.com/deck/NzcojBLfEuYpENr5VyH1NE/Lauren-Tsao---Dynamic-Web-Mid-term-Presentation?node-id=10-53&viewport=-1066%2C-708%2C0.46&t=Q5Qy0wldm5qpr0Yc-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1)

## Milestone #3 - Building the Components in React

### The 'ImageHover.js' component

This component's purpose is to enable me to interchange between the hovered and 'unhovered' states of the visuals that I created in Figma.

To do this, I added fixed props to it, followed by the useState hook to enable to change the states.

```
const ImageHover = ({
  className = "w-60 z-5",
  defaultSrc,
  hoverSrc,
  alt,
  onMouseEnter,
  onMouseLeave,
}) => {
  const [isHovered, setIsHovered] = useState(false);
}
```

### The 'ZodiacCard.js' component

This component was the most challenging aspect of the project. It almost singlehandedly encompasses everything I learned in this course up to this point. By that I mean:

- useState()
- useEffect()
- API calling
- Utilizing React Router

I ran into the problem where I wanted the ZodiacCard to display the horoscope of a selected Zodiac. What I knew is that:

- I needed to somehow form a relationship between the API and React Router
- The API and the React Router must have some sort of shared variable to form this relationship
- Everything must lead back to the 'zodiacInfo' in the API in order for the correct horoscope to be displayed

With this thought process in mind, I proceeded to do some research. That's when I came across the useParams() hook provided by React Router. These [videos](https://www.figma.com/deck/NzcojBLfEuYpENr5VyH1NE/Lauren-Tsao---Dynamic-Web-Mid-term-Presentation?node-id=20-4898&viewport=-1066%2C-708%2C0.46&t=Q5Qy0wldm5qpr0Yc-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1) helped in me in gaining an understanding on how it works.

Using this hook, I came up with variable 'zodiacSign'. It takes on whatever value was inserted in /:zodiacSign in the App.js. For example, if I click on Taurus, /:zodiacSign will read as /taurus, this information  is then passed back to the zodiacSign variable in the ZodiacCard component to render the horoscope for the Taurus zodiac.

#### In App.js
```
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:zodiacSign" element={<ZodiacPage />} />
  );
}
```

#### In ZodiacCard.js component
```
const ZodiacCard = () => {
  const { zodiacSign } = useParams();
  const [zodiacData, setZodiacData] = useState(null);

  const handleFetchZodiac = async (zodiacInfo) => {
    const result = await getAPI(zodiacInfo);
    setZodiacData(result);
  };

  useEffect(() => {
    if (!zodiacSign) return;
    handleFetchZodiac(zodiacSign);
  }, [zodiacSign]);
}
```


### The 'Button.js' component

The easiest component to work on. This is based off by Week 03's tutorial by Professor Adee on creating a component library, with the introduction of props. Using what I learned, I created this component to be utilized as a 'Back' button.

```
const Button = (props) => {
  const { children, primary, secondary, ...otherProps } = props;

  const classes = cx(
    "flex items-center px-8 py-3 mx-1 my-1 border transition-colors duration-400",
    otherProps.className,
    {
      "bg-white border-white text-black hover:bg-black hover:text-white":
        primary,
      "bg-back border-white text-white hover:bg-white hover:text-black":
        secondary,
    }
  );

  return (
    <button {...otherProps} className={classes}>
      {children}
    </button>
  );
};
```

### Milestone #3 - Placing Components into Pages

I see components as building blocks, and now that these building blocks are complete, its time to utlize them to build the website pages.

There are two pages I needed to build.

#### HomePage.js

This is the first thing that the user sees when entering the website. This is where the component ImageHover.js will reside in.

I proceed to fill in what the props that the component required. I also added a useState() so that the default 'Find a Constellation' is replaced with the name of the zodiac is that is hovered over.

```
const HomePage = () => {
  const [hoveredConstellation, setHoveredConstellation] = useState(null);

  return (
    <div className="relative w-screen h-screen bg-black overflow-hidden">
      <NavLink to="/taurus" className="absolute top-1/3 left-1/5 w-60 block">
        <HoverImage
          defaultSrc={CONSTELLATION_UNHOVERED.taurusUnhovered}
          hoverSrc={CONSTELLATION.taurus}
          alt="taurus"
          onMouseEnter={() => setHoveredConstellation("taurusText")}
          onMouseLeave={() => setHoveredConstellation(null)}
        />
      </NavLink>
  );
};
```
This block (sans everything above 'return') is repeated by replacing 'taurus' with the other zodiac names.

#### ZodiacPage.js

This page is to hold the ZodiacCard component. I encountered some issues in the loading of the animated background (created using Adobe AfterEffects) in the ZodiacCard component, so as an added measure I added the animated background to this page as well.

```
const ZodiacPage = () => {
  return (
    <div className="w-screen h-screen overflow-hidden">
      <ZodiacCard />
      <video
        className="z-0 pointer-events-none"
        width="100%"
        autoPlay
        muted
        loop
      >
        <source src={WEBSITE_BG} type="video/mp4" />
      </video>
    </div>
  );
};
```

## Next Steps

I am overall satisfied with the outcome, but if I were to revisit this project again in the future, I would like to implement toggle buttons for the following purposes:

- To switch between light and dark modes
- To interchange between viewing the constellation and sign versions of the selected zodiac in the ZodiacCard.js component

## Presentation Deck

The link to the presentation deck of this project can be viewed [here](https://www.figma.com/deck/NzcojBLfEuYpENr5VyH1NE/Lauren-Tsao---Dynamic-Web-Mid-term-Presentation?node-id=1-42&viewport=-1066%2C-708%2C0.46&t=Q5Qy0wldm5qpr0Yc-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1)
