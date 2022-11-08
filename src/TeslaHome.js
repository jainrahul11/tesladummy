import TeslaHeader from './TeslaHeader'
import TeslaSection from './TeslaSection'
export default function TeslaHome(){
    return(
        <>
            <TeslaHeader/>
            <TeslaSection name='Model-3' 
            tagline='Order Online for Touchless Delivery'
            lbuttontext='CUSTOM ORDER'
            rbuttontext='EXISTING INVENTORY'
            bgimage='model-3.jpg'/>
            <TeslaSection name='Model-Y'
            tagline='Order Online for Touchless Delivery'
            lbuttontext='CUSTOM ORDER'
            rbuttontext='EXISTING INVENTORY'
            bgimage='model-y.jpg'/>
            <TeslaSection name='Model-S'
            tagline='Order Online for Touchless Delivery'
            lbuttontext='CUSTOM ORDER'
            rbuttontext='EXISTING INVENTORY'
            bgimage='model-s.jpg'/>
            <TeslaSection name='Model-X'
            tagline='Order Online for Touchless Delivery'
            lbuttontext='CUSTOM ORDER'
            rbuttontext='EXISTING INVENTORY'
            bgimage='model-x.jpg'/>
            <TeslaSection name='Solar Panels'
            tagline='Lowest Cost Solar Panels in America'
            lbuttontext='ORDER NOW'
            rbuttontext='LEARN MORE'
            bgimage='solar-panel.jpg'/>
            <TeslaSection name='Solar Roofs'
            tagline='Produce Clean Energy From Your Roof'
            lbuttontext='ORDER NOW'
            rbuttontext='LEARN MORE'
            bgimage='solar-roof.jpg'/>
            <TeslaSection name='Accessories'
            lbuttontext='SHOP NOW'
            bgimage='accessories.jpg'/>
        </>
    )
}