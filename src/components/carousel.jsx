import { Carousel } from 'antd';
const contentStyle = {
    height: '89vh',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};
const Slider = () => (
    <Carousel autoplay>
        <div>
            <div style={contentStyle}><img src="https://burgeroclock.com.pk/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1699651009-Cricket-Craze.jpg&w=1920&q=75" alt="" className='h-full w-full' /></div>
        </div>
        <div>
            <div style={contentStyle}><img src="https://burgeroclock.com.pk/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1699650814-Sliders.jpg&w=1920&q=75" alt="" className='h-full w-full' /></div>
        </div>
        <div>
            <div style={contentStyle}><img src="https://burgeroclock.com.pk/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1698624000-Wrap-Web-Cover.jpg&w=1920&q=75" alt="" className='h-full w-full' /></div>
        </div>

    </Carousel>
);
export default Slider;