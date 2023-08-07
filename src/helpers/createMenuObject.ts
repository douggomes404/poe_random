type MenuOptions = '' | 'all' | 'sobre' | 'builds' | 'poe';

export const createMenuObject = (activeMenu: MenuOptions) =>{
    let returnObject = {
        all: false,
        sobre: false,
        builds: false,
        poe: false
    };

    if(activeMenu != ''){
        returnObject[activeMenu] = true;
    }

    return returnObject;

}