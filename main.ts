//% color="#AA278D" weight=100
namespace area {
    //% block = "circle radius $radius"
    //% radius.defl=100
    //% radius.min=1 radius.max=100
    export function circle(radius: number) {
        return Math.PI * radius * radius;
    }
}