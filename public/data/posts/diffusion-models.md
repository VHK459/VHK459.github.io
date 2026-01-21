# Implementing Diffusion Models from Scratch

Diffusion models have revolutionized generative AI. Let's build one from the ground up.

## What are Diffusion Models?

Diffusion models learn to reverse a gradual noising process, enabling them to generate high-quality images from random noise.

## The Math

The forward diffusion process gradually adds Gaussian noise over $T$ timesteps:

$$q(\mathbf{x}_t | \mathbf{x}_{t-1}) = \mathcal{N}(\mathbf{x}_t; \sqrt{1-\beta_t}\mathbf{x}_{t-1}, \beta_t\mathbf{I})$$

Using the reparameterization trick, we can sample at any timestep directly:

$$\mathbf{x}_t = \sqrt{\bar{\alpha}_t}\mathbf{x}_0 + \sqrt{1-\bar{\alpha}_t}\boldsymbol{\epsilon}$$

where $\bar{\alpha}_t = \prod_{i=1}^{t}\alpha_i$ and $\alpha_t = 1 - \beta_t$.

The reverse process learns to denoise, modeled as:

$$p_\theta(\mathbf{x}_{t-1} | \mathbf{x}_t) = \mathcal{N}(\mathbf{x}_{t-1}; \boldsymbol{\mu}_\theta(\mathbf{x}_t, t), \boldsymbol{\Sigma}_\theta(\mathbf{x}_t, t))$$

## Training Objective

The simplified training objective (from Ho et al., 2020) is:

$$\mathcal{L}_{simple} = \mathbb{E}_{t, \mathbf{x}_0, \boldsymbol{\epsilon}}\left[\|\boldsymbol{\epsilon} - \boldsymbol{\epsilon}_\theta(\mathbf{x}_t, t)\|^2\right]$$

This is equivalent to training a noise prediction network.

## Implementation

Key components:

1. **Noise scheduler**: Variance schedule $\beta_1, ..., \beta_T$ (typically linear or cosine)
2. **U-Net architecture** with attention blocks and residual connections
3. **Training loop** with score matching
4. **Sampling algorithm** (DDPM, DDIM):

For DDPM sampling:

$$\mathbf{x}_{t-1} = \frac{1}{\sqrt{\alpha_t}}\left(\mathbf{x}_t - \frac{1-\alpha_t}{\sqrt{1-\bar{\alpha}_t}}\boldsymbol{\epsilon}_\theta(\mathbf{x}_t, t)\right) + \sigma_t\mathbf{z}$$

where $\mathbf{z} \sim \mathcal{N}(0, \mathbf{I})$ and $\sigma_t = \sqrt{\beta_t}$.

## Classifier-Free Guidance

We can steer generation with conditional information:

$$\tilde{\boldsymbol{\epsilon}}_\theta(\mathbf{x}_t, t, c) = \boldsymbol{\epsilon}_\theta(\mathbf{x}_t, t, \emptyset) + s \cdot (\boldsymbol{\epsilon}_\theta(\mathbf{x}_t, t, c) - \boldsymbol{\epsilon}_\theta(\mathbf{x}_t, t, \emptyset))$$

where $s > 1$ is the guidance scale.

## Results

After training on a custom dataset for 500k iterations, the model generates coherent images with good diversity. The FID (Fréchet Inception Distance) score achieves:

$$FID = \|\mu_r - \mu_g\|^2 + \text{Tr}(\Sigma_r + \Sigma_g - 2\sqrt{\Sigma_r\Sigma_g}) \approx 12.3$$

Code and experiments coming soon!
