# Real-Time Black Hole Simulation with GLSL

This project demonstrates a real-time ray-traced black hole simulation running entirely on the GPU using GLSL shaders.

## The Physics

The simulation accounts for:
- Gravitational lensing around a Schwarzschild black hole
- Doppler shifting of light
- Accretion disk rendering with temperature-based colors
- Observer motion in relativistic spacetime

The Schwarzschild metric in spherical coordinates is given by:

$$ds^2 = -\left(1 - \frac{2GM}{c^2r}\right)c^2dt^2 + \left(1 - \frac{2GM}{c^2r}\right)^{-1}dr^2 + r^2(d\theta^2 + \sin^2\theta d\phi^2)$$

For our shader, we use dimensionless coordinates where $r_s = 2GM/c^2 = 1$.

## Technical Implementation

The shader uses ray-tracing techniques to simulate how light bends around massive objects. Each pixel traces a path through curved spacetime, calculating how the observer's view is warped by gravity.

The geodesic equation for light rays simplifies to:

$$\frac{d^2u}{d\phi^2} + u = 3Mu^2$$

where $u = 1/r$ is the inverse radius. This differential equation describes how photon paths curve in the Schwarzschild geometry.

### Key Features

- **Interactive Controls**: Mouse/touch input controls observer distance and orbital inclination
- **Post-processing**: Bloom effects and dithering for a stylized look
- **Performance Optimizations**: Adaptive stepping and efficient GPU utilization

## Code Highlights

The ray-tracing loop iterates through curved spacetime:

```glsl
for (int j=0; j < NSTEPS; j++) {
    u += du * step;
    du += (-u + 1.5*u*u) * step;
    phi += step;
    if (u < 0.0 || phi > MAX_REVOLUTIONS * 2.0*M_PI) break;
}
```

The impact parameter $b$ determines the bending angle:

$$b = \frac{r\sin\theta}{\sqrt{1 - \frac{2M}{r}}}$$

For photons at the photon sphere ($r = 3M$), the angular velocity is $\Omega = \sqrt{M/r^3}$.

## Future Improvements

- Add Kerr black hole (rotating) physics with angular momentum $J$
- Implement gravitational wave visualization using the quadrupole formula:
  $$h_{ij} \sim \frac{G}{c^4r}\frac{d^2I_{ij}}{dt^2}$$
- Add photon sphere highlighting at $r = 3GM/c^2$

Check out the live demo on the homepage!
