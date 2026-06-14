import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox ({ info }) {
    const INIT_URI = "https://media.istockphoto.com/id/119488986/photo/bright-blue-sky-with-the-sun-causing-lens-flare.webp?a=1&b=1&s=612x612&w=0&k=20&c=JuaomEZTm3maJJO-NYnmwWMK5mNoMlr7bvywEW3Mar4=";
    
    const RAIN_URI = "https://media.istockphoto.com/id/1476190237/photo/summer-rain-raindrops-bad-weather-depression.jpg?s=2048x2048&w=is&k=20&c=ky5JTM-ZpKr0zoDfB4jnatyATQ-5ZG7kdg9vU8ndrww=";
    const HOT_URI = "https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URI = "https://images.unsplash.com/photo-1476362555312-ab9e108a0b7e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    return (
        <div className="InfoBox">
            <h3>Weather Info - {info.weather}</h3>
            <div className='cardContainer'>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    sx={{ height: 140 }}
                    image={
                        info.humidity > 80 
                        ? RAIN_URI 
                        : info.temp > 15
                        ? HOT_URI
                        : COLD_URI
                    }
                    title="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {info.city} {
                        info.humidity > 80 
                        ? <ThunderstormIcon />
                        : info.temp > 15
                        ? <WbSunnyIcon />
                        : <AcUnitIcon />
                      }
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                        <p>Temperature: {info.temp}&deg;C</p>
                        <p>Humidity: {info.humidity}</p>
                        <p>Min Temp: {info.tempMin}&deg;C</p>
                        <p>Max Temp: {info.tempMin}&deg;C</p>
                        <p>
                            The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C
                        </p>
                    </Typography>
                  </CardContent>
                </Card>
            </div>
        </div>
    );
}