import {CellStatus} from "../../core/enum";

class Cell {
    title
    id
    status = CellStatus.WAITING
    spec

    constructor(spec) {
        this.title = spec.value
        this.id = spec.value_id
        this.spec = spec
    }


}

export {
    Cell
}
