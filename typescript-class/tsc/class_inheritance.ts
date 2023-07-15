class Building {

    window: string = "window 1";

    escalators(){


        console.log('The escalators is moving');
    }

}
//
// const building = new Building;
//
// building.escalators();

class Building2 extends Building{




    escalators(){


        console.log(this.window);
    }



}


const building2 = new Building2;

building2.escalators();

