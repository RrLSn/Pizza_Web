## Pizza Ordering App

This is a simple pizza ordering app built with React and Next.js. The app has a single page that displays a welcome message and a button to place an order. When the user clicks the button, they are taken to the base page where they can select the type of pizza they want.

### Installation

To install the app, clone the repository and run the following commands:

```
npm install
npm run dev
```

### Code Overview

The code for the app is located in the `pages` directory. The `index.js` file is the main page of the app. It imports the necessary modules and defines the `page` function. The `page` function returns the JSX for the page.

The JSX for the page is structured as follows:

```
<div className={styles.wrapper}>
  <div className={styles.main}>
    <h1>WELCOME</h1>
    <h1>WE OFFER THE BEST</h1>
    <div className="w-[13rem] h-[7rem] bg-[#242424] flex justify-center items-center ">
      <h1 className="text-8xl font-bold">PIZZA</h1>
    </div>
    <h1>IN TOWN</h1>
  </div>
  <Link href="/Base">
    <button>Place Order</button>
  </Link>
</div>
```

The `wrapper` div is the main container for the page. The `main` div contains the welcome message and the button to place an order. The `pizza` div is a styled div that displays the word "PIZZA" in a large font.

The `Link` component is used to create a link to the base page. The `button` element is the button that the user clicks to place an order.

### Styling

The app is styled using CSS modules. The CSS for the app is located in the `styles` directory. The `Intro.module.css` file contains the styles for the `index.js` page.

The CSS for the page is structured as follows:

```
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.main {
  display: flex;
  flex-direction: column;
  justify-

Open [PIZZA-WEB](https://pizza-web-six.vercel.app/) with your browser to see the result.
```
