/**
 * Represents a building with a window and escalators.
 */
class Building {
    window: string = "window 1";
  
    /**
     * Moves the escalators.
     */
    escalators() {
      console.log('The escalators are moving.');
    }
  }
  
  const building = new Building;
  building.escalators();
  
  /**
   * Represents a building that extends the Building class.
   */
  class Building2 extends Building {
    /**
     * Overrides the escalators method to log the window property.
     */
    escalators() {
      console.log(this.window);
    }
  }
  
  const building2 = new Building2;
  building2.escalators();
  