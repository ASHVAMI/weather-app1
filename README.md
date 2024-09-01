# Weather Information Application

## Description

This is a weather information application with a search interface, designed to resemble the Google home page. The application allows users to search for localities and view weather information using the Weatherunion API. The interface supports autocomplete suggestions and provides a responsive, user-friendly design.

## Features

- **Search Interface**: Mimics the Google home page for a familiar user experience.
- **Autocomplete Suggestions**: Provides real-time suggestions as users type in the search box.
- **Weather Information**: Fetches and displays weather details for the selected locality.
- **Responsive Design**: Works seamlessly across devices of all sizes.

## Technologies Used

- **Next.js**: Framework for server-side rendering and static site generation.
- **TypeScript**: Type-safe programming language for improved development experience.
- **TailwindCSS**: Utility-first CSS framework for styling.
- **Redux**: State management library for handling application state.
- **Weatherunion API**: Free weather API for fetching weather data.

## Setup

1. **Navigate to the Project Directory**

    cd weather-information-app

2. **Install Dependencies**
    
    npm install

3. **Create Environment File**

    Create a `.env.local` file in the root directory and add your Weatherunion API key:
    env
    WEATHER_API_KEY=your_api_key_here

4. **Run the Development Server**

    npm run dev


5. **Open in Browser**

    Visit `http://localhost:3000` to view the application in your browser.

## Development

- **Autocomplete Component**: Implements search suggestions based on locality names.
- **Weather Details Page**: Displays weather information for the selected locality.
- **State Management**: Uses Redux for managing the application state.

### Example Components

#### Autocomplete Component

This component provides search suggestions as users type in the search box.

#### Weather Details Page

Displays detailed weather information including temperature, humidity, and weather conditions.

## Customization

Feel free to modify the UI/UX according to your preferences. You can use the provided Figma file as a reference for design inspiration, but adjust as needed to fit your application's requirements.

## Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
Notes:

Replace your_api_key_here with the actual API key from Weatherunion.
