---
layout: page
title: Machine Learning Systems
description: making deep learning training and inference faster
img: assets/img/12.jpg
importance: 1
category: work
related_publications: true
---

Large language model (LLM) training and inference systems are highly complex and rapidly evolving. Optimizing their efficiency remains a critical challenge, largely due to the intricate coupling among algorithms, software, and hardware. Moreover, the massive scale of LLM systems makes them inherently fragile: a single point of failure can disrupt the entire cluster, while a single straggler device can delay synchronization and waste substantial resources. These vulnerabilities underscore the importance of ensuring system reliability and stability. We are currently exploring three interrelated subprojects, including scale-up networks (SuperPods), reinforcement learning frameworks, and reliability issues. 

    ---
    [USENIX NSDI 2025] Holmes: Localizing Irregularities in LLM Training with Mega-scale GPU Clusters
    ---

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projectimg/detection_case.png" title="Anomaly Detection" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Accurate and rapid detection of anomalous devices (straggler) when training LLMs in a mega-scale GPU cluster, just like Holmes (福尔摩斯).
</div>

    ---
    [IEEE Infocom 2025] MemFerry: A Fast and Memory Efficient Offload Training Framework with Hybrid GPU Computation
    ---

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projectimg/system_overview.jpg" title="system overview" class="img-fluid rounded z-depth-1" %}
        {% include figure.liquid loading="eager" path="assets/img/projectimg/GPU_access_main_memory.jpg" title="memory access" class="img-fluid rounded z-depth-1" %}
        {% include figure.liquid loading="eager" path="assets/img/projectimg/shadow_model.jpg" title="shadow memory" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Strategically transferring gradients and model parameters between GPU HBM and CPU host memory in order to accelerate LLM training when the HBM size is limited, just like a Ferry (渡船). 
</div>

You can also put regular text between your rows of images, even citations {% cite einstein1950meaning %}.
Say you wanted to write a bit about your project before you posted the rest of the images.
You describe how you toiled, sweated, _bled_ for your project, and then... you reveal its glory in the next row of images.

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    You can also have artistically styled 2/3 + 1/3 images, like these.
</div>

The code is simple.
Just wrap your images with `<div class="col-sm">` and place them inside `<div class="row">` (read more about the <a href="https://getbootstrap.com/docs/4.4/layout/grid/">Bootstrap Grid</a> system).
To make images responsive, add `img-fluid` class to each; for rounded corners and shadows use `rounded` and `z-depth-1` classes.
Here's the code for the last row of images above:

{% raw %}

```html
<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-4 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
```

{% endraw %}
