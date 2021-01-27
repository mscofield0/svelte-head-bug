type CssCallback = (iteration: number, total_iterations: number, total_duration: number, current_duration: number, key_point: number) => string;

const generate_anim = function (name: string, repetitions: number, key_points: number[], css: CssCallback): string {
    const iterations = repetitions * key_points.length;
    const duration = repetitions * key_points.reduce((prev: number, next: number) => prev + next, 0);
    const perc = (val: number) => val / duration;
    const key_point = (i: number) => key_points[i];

    let style = `@keyframes ${name} {`;

    let iter = 0;
    let i = 0;
    let kpi = 0;
    let prev_key = 0;

    while (i < duration) {
        const next_key = perc(i + key_point(kpi)) * 100;

        style += `${prev_key.toFixed(3)}%, ${next_key.toFixed(3)}% {
            ${
                css(iter, iterations, duration, i, key_point(kpi))
            }
        }`;

        i += key_point(kpi)
        kpi++;
        kpi %= key_points.length;
        iter++;
        prev_key = next_key;
    }
    
    style += "}";

    return "<style>" + style + "<style>";
}

/* Example

const style = generate_anim("anim", 8, [3, 1], (iter, total_iters, dur, i) => {
    console.log(`iter: ${iter}, total_iters: ${total_iters}`);
    const rot = iter == 0 ? 0 : iter == total_iters - 1 ? 360 : Math.round(iter / 2) * 45;

    return `transform: rotate(${rot}deg);`;
});
*/

export default generate_anim;