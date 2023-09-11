'use client'
import Editor from '@monaco-editor/react';
import { useState,useEffect } from 'react'
import SplitPane, { Pane } from 'split-pane-react';
import Styles from './problem.module.css';
import 'split-pane-react/esm/themes/default.css'

import ProblemHeaderComponent from '../../components/problem/problem_header';
import ProblemDescription from '../../components/problem/problem_description';
import EditorBottomBar from '../../components/problem/editor_bottom_bar';
import SubmissionBottomSheet from '../../components/problem/submission_bottom_sheet';
import { RecoilRoot } from 'recoil';
const code: string =
    `
#include <iostream>
  using namespace std;

  int main() {
    cout << "Hello World!";
    return 0;
  }
`
const description: string = `The problem is to find the shortest distances between every pair of vertices in a given edge-weighted directed graph. The graph is represented as an adjacency matrix of size n*n. Matrix[i][j] denotes the weight of the edge from i to j. If Matrix[i][j]=-1, it means there is no edge from i to j.<strong> Do it in-place. <strong><br><br>
<div class='code_container'>
<code>
<strong>Example 1:</strong><br>
Input: matrix = {{0,1,43},{1,0,6},{-1,-1,0}}<br>
<img src='https://media.geeksforgeeks.org/wp-content/uploads/20221106202714/WhatsAppImage20221106at82359PM.jpeg' alt='floyd warshall example 1' width='100px' height='100px'><br>
Output: {{0,1,7},{1,0,6},{-1,-1,0}}<br>
Explanation: We can reach 2 from 0 as 0->1->2
and the cost will be 1+6=7 which is less than 
43.
</code>
</div>
`;
const splitpane = () => {
    const [sizes, setSizes] = useState([
        "auto",
        '55%',
    ]);

    const [screenSize, setScreenSize] = useState<Window>();

    useEffect(() => {
        setScreenSize(window);
    }, []);
    
    const layoutCSS = {
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    return (
        <div style={{ height:"calc(100vh - 4rem)"}} >
            <SplitPane
            className={Styles.wrapper}
                split= {screenSize != null  && screenSize!.innerWidth > 768 ? 'vertical' : 'horizontal'}
                sizes={sizes}
                onChange={(newsize: any) => setSizes(newsize)}>
                <Pane minSize='30%' maxSize='70%'>
                    <div style={{ ...layoutCSS }} >
                        <div className={Styles.problem_container}>
                            <ProblemHeaderComponent header={{
                                title: "Floyd Warshall",
                                difficulty: "hard",
                                acceptancePercentage: 55,
                                submissionsCount: 1000,
                            }}></ProblemHeaderComponent>
                            <ProblemDescription description={description}></ProblemDescription>
                            <ProblemDescription description={description}></ProblemDescription>
                            <ProblemDescription description={description}></ProblemDescription>
                            <SubmissionBottomSheet></SubmissionBottomSheet>
                        </div>
                    </div>
                </Pane>
                <div style={{ ...layoutCSS }}>
                    <div className={Styles.editor_container}>
                       <EditorBottomBar></EditorBottomBar>

                        <Editor theme='vs-dark' defaultLanguage="cpp" defaultValue={code} />
                    </div>
                </div>
            </SplitPane>
        </div>
    )
}

export default splitpane

