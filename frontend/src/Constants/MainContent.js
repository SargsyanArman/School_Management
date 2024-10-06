import main from "../../images/main-background.jpg";

export const FEATURES = [
    {
        title: "Efficient Management",
        description: "Manage students, teachers, and courses efficiently with our easy-to-use interface."
    },
    {
        title: "Secure Data",
        description: "Your data is secure with us, ensuring privacy and protection at all times."
    },
    {
        title: "User-Friendly Interface",
        description: "Our platform is designed to be intuitive and easy for all users, regardless of technical skill."
    }
];

export const TESTIMONIALS = [
    {
        text: "This tool has revolutionized the way we manage our school. Highly recommend!",
        author: "Alex Smith, Principal"
    },
    {
        text: "User-friendly and effective. It has made my job so much easier!",
        author: "Jane Doe, Teacher"
    },
    {
        text: "I love how organized everything is. A must-have for any school!",
        author: "Mark Johnson, Parent"
    }
];

export const FOOTER_BOX_STYLE = {
    width: '100%',
    height: '550px',
    backgroundImage: `url(${main})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: 'white',
    padding: 3,
    position: 'relative',
    '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 1,
    },
}