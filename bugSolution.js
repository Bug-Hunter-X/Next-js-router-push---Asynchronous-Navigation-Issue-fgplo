```javascript
import { useRouter } from 'next/router';

function MyComponent() {
  const router = useRouter();
  const handleClick = async () => {
    const result = await router.push('/destination');
    if (result.error) {
      console.error('Navigation failed:', result.error)
    } else {
      console.log('Navigation complete');
    }
  };

  return (
    <button onClick={handleClick}>Go to Destination</button>
  );
}
```