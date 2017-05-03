export const getIconName = (routeName)=>{
    if(routeName.includes('Fly'))return 'plane'
    if(routeName.includes('Drive'))return 'car'
    if(routeName.includes('Rideshare'))return 'car'
    if(routeName.includes('Train'))return 'train'
    if(routeName.includes('train'))return 'train'
    if(routeName.includes('Bus'))return 'bus'
}