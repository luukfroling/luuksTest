# Jupyterlite-sphinx

### Voorbeeld 1

```{eval-rst}
.. replite::
   :kernel: xeus-python
   :toolbar: 0
   :theme: JupyterLab Light
   :width: 100%
   :height: 600px

   print("Hello from a JupyterLite console!")
```

### Installatie

Op de website (https://jupyterlite-sphinx.readthedocs.io/en/latest/) staat dat er 2 dingen geinstalleerd moeten worden:
- pip install jupyterlite-pyodide-kernel
- pip install jupyterlite-xeus
De build werkt voor mij echter niet als ik jupyterlite-xeus installeer. Dan komt een mamba/conda error wat problemen geeft met pip. 
Voor dit boek zijn alleen 'jupyterlite-pyodide-kernel' en 'jupyterlite-sphinx' geinstalleerd (zie requirements.txt).
 
