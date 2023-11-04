# Syncraze - A Developer-Friendly Social Media Platform

Welcome to the Syncraze project! We're on a mission to create a social media platform designed specifically for developers. With an intuitive and user-friendly interface, Syncraze is built to be easily understood by anyone in the development community. In this Readme, you will find detailed information on our project, the technology stack, how to set it up, and run it step by step.

## Technology Stack

- Frontend:
  - Next.js
- Backend:
  - Django

## Getting Started

To run Syncraze locally, follow these steps:

### Prerequisites

Before you begin, ensure you have the following installed:

- [Requrements env]
- Node { version >= 18 }

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/Syncraze.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Syncraze
   ```

### Configuration

1. env info

### Running the Application

1. Start the backend server:

   ```bash
   cd backend
   python manage.py runserver
   ```

2. Start the frontend development server:

   ```bash
   cd frontend
   run dev
   ```

3. Open your web browser and access the application at [http://localhost:8000](http://localhost:3000)

## API Routes

Here is the list of some basic API routes.

- [Profile Details](#profile-details)
- [Create Profile](#create-profile)

## Profile Details

### Get Profile Details

**Endpoint:** `/profiles/<int:id>/`

**Method:** `GET`

**Description:** Get details of a user profile by providing the user's ID.

**Parameters:**
- `id` (int): User ID

**Example Request:**
```bash
curl -X GET http://[base-url]/profiles/[id]/
```
Example Response:

```json
{
    "id": 2,
    "username": "omega",
    "email": "omega@gmail.com",
    "bio": "hello how are you",
    "profile_picture": "http://localhost:8000/media/None/Screenshot_from_2023-11-01_06-26-13.png",
    "followers": 0,
    "following": 1,
    "posts_count": 0
}
```

# Create Profile

## Create a New Profile

**Endpoint:** `/profiles/create/`

**Method:** `POST`

**Description:** Create a new user profile.

**Parameters:**
- `username` (string): User's username
- `email` (string): User's email
- `bio` (string): User's biography (optional)
- `profile_picture` (file): User's profile picture (optional)

**Example Request:**
```bash
curl -X POST -H "Content-Type: multipart/form-data" -F "username=john_doe" -F "email=john@example.com" -F "bio=A passionate developer" -F "profile_picture=@profile.jpg" http://[base-url]/profiles/create/
```
#### [ ] Replace them with your own values.




## Contribution

We welcome contributions from the developer community to make Syncraze even better. If you'd like to contribute, please follow these steps:

- Fork this repository.
- Create a new branch for your feature or bug fix: `git checkout -b feature/your-feature-name`
- Make your changes and commit them: `git commit -m 'Add a new feature'`
- Push to your fork and submit a pull request.

## License

MIT License

# Our Contributors

| Name of Contributors   |                                     Profiles                                        | Roles |
|:---                    |            :----                                                                   |    :----  |
| Mohammad Ashif       |  [@Mohammadashif1001](https://github.com/mohammadashif1001)                                      |Fullstack|
| Arpit Yadav       |  [@darkxxdevs](https://github.com/darkxxdevs)                                  |Fullstack |
| Pallav Rai       |  [@Pallav Rai](https://github.com/pallavrai)                                  |Fullstack |


## Contact

If you have any questions or need assistance, feel free to reach out to us at mohammadashif1000@gmail.com.

Thank you for being a part of the Syncraze journey! We're excited to build a developer-focused social media platform together. 🚀
