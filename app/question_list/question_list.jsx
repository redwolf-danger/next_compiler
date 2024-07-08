export const question_list = {
    '1':{
        title:" Add two Numbers",
        status: 0,
        //0 for not done 1 for attempted and 2 for solved
        // always access it with local storage like 
        // Math.max(question_list[q_id].status,localStorage.getItem(`${q_id}_status`))
        question_desc:(<div>
            {/* <div>1. Add Two Numbers </div> */}
            <hr/>
            <div>
                You are given a number <b><i>n</i></b> specifying the number of test cases.In each test case
                ou are given two number <b><i>a</i></b> and <b><i>b</i></b>.Print the output after adding these numbers. Note that each number must be printed on a new line 
            </div>
        </div>),
        input_stream:"5\n0\n1\n0\n0\n-2\n-3\n-4\n6\n1\n2",
        output_stream:"1\n0\n-5\n2\n3",
        test_cases_display:(<>
        INPUTS:
        <div>
            5 <hr/>
            0 1 <hr />
            0 0 <hr />
            -2 -3 <hr />
            -4 6 <hr />
            1 2 <hr />
        </div>
        OUTPUTS:
        <div>
            1 <hr />
            0 <hr />
            -5 <hr />
            2 <hr />
            3 <hr />
        </div>
        </>),
        id:1,
        difficulty:"easy"
    },
    '2':{
        title:"Multiply two Numbers",
        status: 0,
        //0 for not done 1 for attempted and 2 for solved
        question_desc:(<div>
            {/* <div>1. Multiply Two Numbers</div> */}
            <hr/>
            <div>
                You are given a number <b><i>n</i></b> specifying the number of test cases.In each test case
                ou are given two number <b><i>a</i></b> and <b><i>b</i></b>.Print the output after multilpying these numbers. Note that each number must be printed on a new line 
            </div>
        </div>),
        input_stream:"5\n0\n1\n0\n0\n-2\n-3\n-4\n6\n1\n2",
        output_stream:"0\n0\n6\n-24\n2",
        test_cases_display:(<>
        INPUTS:
        <div>
            5 <hr/>
            0 1 <hr />
            0 0 <hr />
            -2 -3 <hr />
            -4 6 <hr />
            1 2 <hr />
        </div>
        OUTPUTS:
        <div>
            0 <hr />
            0 <hr />
            6 <hr />
            -24 <hr />
            2 <hr />
        </div>
        </>),
        id:2,
        difficulty:"easy"
    },
    '3':{
        title:" Add two Numbers",
        status: 0,
        //0 for not done 1 for attempted and 2 for solved
        question_desc:(<div>
            {/* <div>1. Add Two Numbers</div> */}
            <hr/>
            <div>
                You are given a number <b><i>n</i></b> specifying the number of test cases.In each test case
                ou are given two number <b><i>a</i></b> and <b><i>b</i></b>.Print the output after adding these numbers. Note that each number must be printed on a new line 
            </div>
        </div>),
        input_stream:"5\n0\n1\n0\n0\n-2\n-3\n-4\n6\n1\n2",
        output_stream:"1\n0\n-5\n2\n3",
        test_cases_display:(<>
        INPUTS:
        <div>
            5 <hr/>
            0 1 <hr />
            0 0 <hr />
            -2 -3 <hr />
            -4 6 <hr />
            1 2 <hr />
        </div>
        OUTPUTS:
        <div>
            1 <hr />
            0 <hr />
            -5 <hr />
            2 <hr />
            3 <hr />
        </div>
        </>),
        id:3,
        difficulty:"easy"
    },
    // 4:{
        
    // },
    // 5:{
        
    // },
    // 6:{
        
    // },
}