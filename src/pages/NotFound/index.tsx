import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/molecules/Button';

export const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 text-center">
            <div className="max-w-lg px-6 py-12 bg-white rounded-lg shadow-lg border border-gray-200">
                <h1 className="text-6xl font-bold text-red-600">404</h1>
                <h2 className="mt-4 text-3xl font-semibold text-gray-800">Page Not Found</h2>
                <p className="mt-2 text-lg text-gray-500">Sorry, the page you're looking for doesn't exist or has been moved.</p>
                <div className="mt-6">
                    <Button
                        onClick={() => navigate('/')}
                        className="px-6 py-3 rounded-full"
                    >
                        Go Back Home
                    </Button>
                </div>
            </div>
        </div>
    );
};