```javascript
import { useRouter } from 'next/router';

function MyComponent() {
  const router = useRouter();
  const handleClick = () => {
    router.push('/destination');
    // Perform some action after navigation
    console.log('Navigation complete');
  };

  return (
    <button onClick={handleClick}>Go to Destination</button>
  );
}
```