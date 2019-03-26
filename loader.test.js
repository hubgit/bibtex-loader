const loader = require('./loader')

test('Converts BibTeX to CSL JSON', () => {
  const input = `
@inproceedings{saad2013supporting,
  title={Supporting literature review by searching, visualizing and navigating related papers},
  author={Saad, Farag and Mathiak, Brigitte and Mutschke, Peter},
  booktitle={2013 International Conference on Cloud and Green Computing},
  pages={363--368},
  year={2013},
  organization={IEEE}
}

@article{qiao2013cociter,
  title={CoCiter: an efficient tool to infer gene function by assessing the significance of literature co-citation},
  author={Qiao, Nan and Huang, Yi and Naveed, Hammad and Green, Christopher D and Han, Jing-Dong J},
  journal={PloS one},
  volume={8},
  number={9},
  pages={e74074},
  year={2013},
  publisher={Public Library of Science}
}

@inproceedings{rind2017pubviz,
  title={PubViz: Lightweight visual presentation of publication data},
  author={Rind, A and Haberson, A and Blumenstein, K and Niederer, C and Wagner, M and Aigner, W},
  booktitle={Proc. Eurographics Conf. Visualization (EuroVis)--Short Paper. Accepted},
  year={2017}
}`

  const output = loader(input)

  expect(output).toMatchSnapshot()
})
